import { assertAlmostEquals, assertThrows } from "@std/assert";
import { convertToMeters } from "./conversion.ts";

Deno.test("1 mile is 1 meter", () => {
  assertAlmostEquals(convertToMeters(1, "mile"), 1609.344);
});

Deno.test("1 furlong is 201.168 meter", () => {
  assertAlmostEquals(convertToMeters(1, "furlong"), 201.168);
});

Deno.test("1 meter is 1 meter", () => {
  assertAlmostEquals(convertToMeters(1, "meter"), 1);
});

Deno.test("1 inch is 0.0254 meters", () => {
  assertAlmostEquals(convertToMeters(1, "inch"), 0.0254);
});

Deno.test("1 yard is 0.9144 meters", () => {
  assertAlmostEquals(convertToMeters(1, "yard"), 0.9144);
});

Deno.test("1 furlong is 201.168 meters", () => {
  assertAlmostEquals(convertToMeters(1, "furlong"), 201.168);
});

Deno.test("100 centimeter is 1 meters", () => {
  assertAlmostEquals(convertToMeters(100, "centimeter"), 1,)
})

Deno.test("li ist an unknown unit", () => {
  assertThrows(() => {
    convertToMeters(1, "li")
  }, "Unknown unit: li")
})