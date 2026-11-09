(() => {
  const button = document.querySelector("#downloadWord");
  button.addEventListener("click", async () => {
    const notices = [...document.querySelectorAll("#notice > article.notice")].map(notice => notice.cloneNode(true));
    if (!notices.length) {
      alert("目前沒有可下載的通知單。");
      return;
    }

    button.disabled = true;
    button.textContent = "正在製作 Word…";
    try {
      const {
        AlignmentType, Document, Packer, Paragraph, Table, TableCell, TableRow,
        TextRun, WidthType,
      } = await import("https://cdn.jsdelivr.net/npm/docx@9.5.1/+esm");

      function paragraph(text, options = {}, bold = false) {
        return new Paragraph({
          spacing: { after: 90 },
          ...options,
          children: text.split("\n").map((line, index) => new TextRun({
            text: line, bold, break: index ? 1 : undefined,
          })),
        });
      }

      function table(element) {
        return new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          margins: { top: 80, bottom: 80, left: 90, right: 90 },
          rows: [...element.rows].map(row => new TableRow({
            cantSplit: true,
            tableHeader: row.parentElement.tagName === "THEAD",
            children: [...row.cells].map(cell => new TableCell({
              columnSpan: cell.colSpan,
              rowSpan: cell.rowSpan,
              children: [paragraph(cell.textContent.trim(), {
                alignment: AlignmentType.CENTER, spacing: { after: 0 },
              }, cell.tagName === "TH")],
            })),
          })),
        });
      }

      const children = notices.flatMap((notice, index) =>
        [...notice.querySelectorAll("h2,h3,h4,p,table")].map((element, position) => {
          if (element.tagName === "TABLE") return table(element);
          const heading = element.matches("h2,h3,h4");
          return paragraph(element.textContent.trim(), {
            pageBreakBefore: index > 0 && position === 0,
            alignment: element.matches(".notice-title") ? AlignmentType.CENTER : AlignmentType.LEFT,
            keepNext: heading,
          }, heading);
        }));

      const documentFile = new Document({
        styles: { default: { document: { run: { font: "Microsoft JhengHei", size: 22 } } } },
        sections: [{
          properties: { page: { size: { width: 11906, height: 16838 },
            margin: { top: 850, bottom: 850, left: 850, right: 850 } } },
          children,
        }],
      });
      const url = URL.createObjectURL(await Packer.toBlob(documentFile));
      const link = document.createElement("a");
      link.href = url;
      link.download = document.title.replace("產生器", "") + ".docx";
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error(error);
      alert("Word 產生失敗，請確認網路連線後再試一次。");
    } finally {
      button.disabled = false;
      button.textContent = "下載 Word (.docx)";
    }
  });
})();
