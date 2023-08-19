import { normalData, dependencyData } from "./data";
import PrdInfoBuilder from "./types/PrdInfoBuilder";
import { describe, expect, test } from "@jest/globals";

const testData = (data: PrdInfoBuilder) => {
  const builder = data;
  const prdinfo = builder.build();
  console.log("[PRDINFO]");
  console.log("title:", prdinfo.name);
  console.log("price:", prdinfo.salePrice);
  console.log("[OPTION LIST]");
  prdinfo.options.forEach((opt) => {
    console.log("option:", opt.title);
    opt.selectableAttributes().forEach((attr) => {
      console.log("  ", attr.id, " : ", attr.name);
      console.log("     price=", attr.price);
    });
  });

  describe("Option Select Test", () => {
    // 각각 옵션의 첫번째 속성을 선택
    prdinfo.options[0].selectAttribute(
      prdinfo.options[0].selectableAttributes()[0].id
    );
    prdinfo.options[1].selectAttribute(
      prdinfo.options[1].selectableAttributes()[0].id
    );
    // 선택된 옵션 출력
    console.log("[SELECTED OPTION]");
    prdinfo.options.forEach((opt) => {
      console.log("option:", opt.title);
      console.log("  select: ", opt.selectedAttributeId);
    });
    test("10000(기본)+10000(옵션1-속성1)+1000(옵션2-속성1)", () => {
      expect(prdinfo.totalPrice()).toBe(21000);
    });
  });
};

const run = () => {
  const args = process.argv.slice(2);
  // 전체 테스트
  if (args.length === 0) {
    testData(normalData);
  }
};

run();
