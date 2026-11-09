(() => {
  const button = document.querySelector("#downloadWord");
  const noticeSelector = "#notice > article";
  const twips = pixels => Math.round((parseFloat(pixels) || 0) * 15);

  button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = "正在製作 Word…";
    try {
      const {
        AlignmentType, BorderStyle, Document, HeightRule, HighlightColor, ImageRun,
        Packer, Paragraph, Table, TableCell, TableLayoutType, TableRow, TextRun,
        VerticalAlign, WidthType,
      } = await import("https://cdn.jsdelivr.net/npm/docx@9.5.1/+esm");

      const notices = [...document.querySelectorAll(noticeSelector)];
      if (!notices.length) {
        alert("目前沒有可下載的通知單。");
        return;
      }

      const contentWidth = 10546;
      const noBorder = { style: BorderStyle.NONE };
      const noBorders = Object.fromEntries(
        ["top", "bottom", "left", "right", "insideHorizontal", "insideVertical"]
          .map(side => [side, noBorder])
      );

      function run(text, element) {
        const css = getComputedStyle(element);
        const label = element.matches(".daily-ratio,.ratio-corner,.highlight-mark,.composition-note");
        return new TextRun({
          text,
          font: css.fontFamily.split(",")[0].replace(/["']/g, ""),
          size: Math.round(parseFloat(css.fontSize) * 1.5),
          bold: parseInt(css.fontWeight, 10) >= 600,
          underline: css.textDecorationLine.includes("underline") ? {} : undefined,
          highlight: label ? HighlightColor.YELLOW : undefined,
        });
      }

      function runs(element) {
        return [...element.childNodes].flatMap(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent.trim() ? [run(node.textContent.replace(/\s+/g, " "), element)] : [];
          }
          if (node.nodeName === "BR") return [new TextRun({ break: 1 })];
          return node.nodeType === Node.ELEMENT_NODE ? runs(node) : [];
        });
      }

      function paragraph(element, options = {}) {
        const css = getComputedStyle(element);
        const heading = element.matches("h2,h3,h4");
        const parentSpacing = element === element.parentElement.firstElementChild &&
          element.parentElement.matches(".notes,.ratio-note")
          ? twips(getComputedStyle(element.parentElement).marginTop) : 0;
        const content = runs(element);
        const lineHeight = parseFloat(css.lineHeight) || parseFloat(css.fontSize) * 1.3;
        const corner = element.querySelector(".daily-ratio,.ratio-corner,.composition-note");
        return new Paragraph({
          alignment: corner ? AlignmentType.RIGHT :
            css.textAlign === "center" ? AlignmentType.CENTER : AlignmentType.LEFT,
          indent: { left: twips(css.marginLeft) },
          keepNext: heading || element.matches(".teacher-name"),
          spacing: {
            before: twips(css.marginTop) + parentSpacing,
            after: twips(css.marginBottom),
            line: twips(lineHeight),
            lineRule: "exact",
          },
          children: content.length ? content : [run("", element)],
          ...options,
        });
      }

      function columns(element) {
        const widths = [...element.rows[0].cells].map(cell => cell.getBoundingClientRect().width);
        const total = widths.reduce((sum, width) => sum + width, 0);
        return widths.map(width => Math.round(contentWidth * width / total));
      }

      function table(element) {
        const columnWidths = columns(element);
        return new Table({
          width: { size: contentWidth, type: WidthType.DXA },
          columnWidths,
          layout: TableLayoutType.FIXED,
          margins: { top: 57, bottom: 57, left: 57, right: 57 },
          rows: [...element.rows].map(row => {
            const header = row.parentElement.tagName === "THEAD";
            return new TableRow({
              cantSplit: true,
              tableHeader: header,
              height: header ? undefined : { value: twips(getComputedStyle(row.cells[0]).height), rule: HeightRule.ATLEAST },
              children: [...row.cells].map((cell, index) => new TableCell({
                width: { size: columnWidths[index], type: WidthType.DXA },
                verticalAlign: cell.querySelector(".daily-ratio,.ratio-corner,.composition-note") ?
                  VerticalAlign.BOTTOM : VerticalAlign.CENTER,
                children: [paragraph(cell)],
              })),
            });
          }),
        });
      }

      function arrowImage(label) {
        const css = getComputedStyle(label);
        const width = Math.round(18 * 96 / 25.4);
        const height = Math.round(14 * 96 / 25.4);
        const canvas = document.createElement("canvas");
        canvas.width = width * 3;
        canvas.height = height * 3;
        const ctx = canvas.getContext("2d");
        ctx.scale(3, 3);
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(width - 1, 1);
        ctx.lineTo(width - 1, height * .68);
        ctx.lineTo(width / 2, height - 1);
        ctx.lineTo(1, height * .68);
        ctx.closePath();
        ctx.fillStyle = css.backgroundColor;
        ctx.fill();
        ctx.strokeStyle = css.color;
        ctx.stroke();
        ctx.fillStyle = css.color;
        ctx.font = css.fontWeight + " " + css.fontSize + " " + css.fontFamily;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(label.textContent.trim(), width / 2, 10);
        return new ImageRun({ type: "png", data: canvas.toDataURL(), transformation: { width, height } });
      }

      function guide(element) {
        const columnWidths = columns(element.nextElementSibling);
        const labels = new Map([...element.querySelectorAll(".ratio-house")].map(label =>
          [Number(getComputedStyle(label).gridColumnStart) - 1, label]));
        return new Table({
          width: { size: contentWidth, type: WidthType.DXA },
          columnWidths,
          layout: TableLayoutType.FIXED,
          borders: noBorders,
          rows: [new TableRow({
            cantSplit: true,
            children: columnWidths.map((width, index) => new TableCell({
              width: { size: width, type: WidthType.DXA },
              children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                keepNext: true,
                spacing: { after: 85 },
                children: labels.has(index) ? [arrowImage(labels.get(index))] : [],
              })],
            })),
          })],
        });
      }

      const children = notices.flatMap((notice, index) =>
        [...notice.querySelectorAll("h2,h3,h4,p,table,.ratio-guide,.cut-line")].map((element, position) => {
          if (element.tagName === "TABLE") return table(element);
          if (element.matches(".ratio-guide")) return guide(element);
          if (element.matches(".cut-line")) return new Paragraph({
            alignment: AlignmentType.CENTER,
            keepNext: true,
            spacing: { before: 110, after: 110 },
            children: [new TextRun("✂ ────────────────────────────────")],
          });
          return paragraph(element, { pageBreakBefore: index > 0 && position === 0 });
        }));

      const documentFile = new Document({
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 },
            margin: { top: 907, bottom: 907, left: 680, right: 680 } } },
          children,
        }],
      });
      const url = URL.createObjectURL(await Packer.toBlob(documentFile));
      const link = document.createElement("a");
      link.href = url;
      const period = document.querySelector("#exam").selectedOptions[0].textContent.trim();
      link.download = (period + "_" + document.title.replace("產生器", "")).replace(/[\\/:*?"<>|]/g, "_") + ".docx";
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error(error);
      alert("Word 產生失敗：" + error.message);
    } finally {
      button.disabled = false;
      button.textContent = "下載 Word (.docx)";
    }
  });
})();