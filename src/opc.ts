/**
 * 개방 폐쇄 원칙 (Open-Closed Principle)
 *
 * 소프트웨어 요소는 확장에 대해 열려 있어야 하지만 변경에 대해서는 닫혀 있어야 한다.
 */

/**
 * OCP를 지키지 않은 개발자 클래스
 *
 * 새로운 개발자 타입이 추가될 때마다 work 메소드를 수정해야 한다.
 *
 * 이는 OCP를 위반한 코드이다.
 */
class NoOPCDeveloper {
  private position: string;

  constructor(position: string) {
    this.position = position;
  }

  public work() {
    if (this.position === "frontend") {
      return "React application";
    }
    if (this.position === "backend") {
      return "Spring application";
    }
    if (this.position === "infra") {
      return "infrastructure";
    }

    return "No work";
  }
}
