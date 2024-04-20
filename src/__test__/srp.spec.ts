import {
  NoSRPDeveloper,
  SRPBackendDeveloper,
  SRPFrontendDeveloper,
} from "../srp";

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

  it("SRP 준수 클래스 테스트", () => {
    const frontendDeveloper = new SRPFrontendDeveloper(
      "김솔",
      "Frontend Developer"
    );
    const backendDeveloper = new SRPBackendDeveloper(
      "김솔",
      "Backend Developer"
    );
    const infraDeveloper = new SRPBackendDeveloper("김솔", "Infra Developer");

    expect(frontendDeveloper.reactDevelop()).toBe(
      "[Frontend Developer] 김솔 is developing React application."
    );

    expect(backendDeveloper.springDevelop()).toBe(
      "[Backend Developer] 김솔 is developing Spring application."
    );

    expect(infraDeveloper.springDevelop()).toBe(
      "[Infra Developer] 김솔 is developing Spring application."
    );
  });
});
