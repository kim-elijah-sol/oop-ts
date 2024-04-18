import { NoSRPDeveloper } from "../srp";

describe("srp", () => {
  it("SRP 위반 클래스 테스트", () => {
    const developer = new NoSRPDeveloper("김솔", "Frontend Developer");

    expect(developer.reactDevelop()).toBe(
      "[Frontend Developer] 김솔 is developing React application."
    );

    expect(developer.springDevelop()).toBe(
      "[Frontend Developer] 김솔 is developing Spring application."
    );

    expect(developer.settingInfra()).toBe(
      "[Frontend Developer] 김솔 is setting up infrastructure."
    );
  });
});
