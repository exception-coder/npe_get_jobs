import { SheetsHyperLinkParserService as t } from "@univerjs/sheets-hyper-link";
import { SheetsHyperLinkResolverService as n } from "@univerjs/sheets-hyper-link-ui";
import { FWorkbookHyperLinkMixin as s } from "@univerjs/sheets-hyper-link/facade";
import { FWorkbook as k } from "@univerjs/sheets/facade";
class p extends s {
  // TODO: this should be migrated back to hyperlink ui plugin
  navigateToSheetHyperlink(e) {
    const r = this._injector.get(t), o = this._injector.get(n), i = r.parseHyperLink(e);
    o.navigate(i);
  }
}
k.extend(p);
