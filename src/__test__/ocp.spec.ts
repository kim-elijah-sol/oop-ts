import { NoOCPDeveloper, OCPDeveloper } from "../ocp";

describe("ocp", () => {
  it("OCP 위반 클래스 테스트", () => {
    const developer = new NoOCPDeveloper("frontend");
    expect(developer.work()).toBe("frontend React application");

    const developer2 = new NoOCPDeveloper("backend");
    expect(developer2.work()).toBe("backend Spring application");

    const developer3 = new NoOCPDeveloper("infra");
    expect(developer3.work()).toBe("infra infrastructure");

    const developer4 = new NoOCPDeveloper("unknown");
    expect(developer4.work()).toBe("No work");
  });

  it("OCPDeveloper", () => {
    const developer = new OCPDeveloper("frontend");
    expect(developer.work("React application")).toBe(
      "frontend React application"
    );

    const developer2 = new OCPDeveloper("backend");
    expect(developer2.work("Spring application")).toBe(
      "backend Spring application"
    );

    const developer3 = new OCPDeveloper("infra");
    expect(developer3.work("infrastructure")).toBe("infra infrastructure");
  });
});
