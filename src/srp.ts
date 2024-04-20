/**
 * 단일 책임 원칙 (Single Responsibility Principle)
 *
 * 한 클래스는 하나의 책임만 가져야 한다.
 */

/**
 * SRP를 지키지 않은 개발자 클래스
 *
 * 개발자 클래스는 React, Spring, 인프라 구축 등 다양한 책임을 가지고 있다.
 *
 * 이는 SRP를 위반한 코드이다.
 */
export class NoSRPDeveloper {
  private name: string;
  private position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public reactDevelop() {
    return `[${this.position}] ${this.name} is developing React application.`;
  }

  public springDevelop() {
    return `[${this.position}] ${this.name} is developing Spring application.`;
  }

  public settingInfra() {
    return `[${this.position}] ${this.name} is setting up infrastructure.`;
  }
}

export class SRPFrontendDeveloper {
  private name: string;
  private position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public reactDevelop() {
    return `[${this.position}] ${this.name} is developing React application.`;
  }
}

export class SRPBackendDeveloper {
  private name: string;
  private position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public springDevelop() {
    return `[${this.position}] ${this.name} is developing Spring application.`;
  }
}

export class SRPDevOps {
  private name: string;
  private position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public settingInfra() {
    return `[${this.position}] ${this.name} is setting up infrastructure.`;
  }
}
