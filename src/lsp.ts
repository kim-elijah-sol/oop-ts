/**
 * 리스코프 치환 원칙(Liskov Substitution Principle, LSP)
 *
 * 서브 타입은 언제나 기반 타입으로 교체할 수 있어야 한다.
 */

export class Developer {
  public name: string;
  public position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  public develop() {
    return `[${this.position}] ${this.name} is developing application.`;
  }
}

/**
 * LSP를 위반한 개발자 클래스
 *
 * 부모 클래스의 develop 메소드를 오버라이딩하여
 * Developer 클래스를 대체할 수 없다.
 */
export class NoLSPFrontDeveloper extends Developer {
  public develop() {
    return `[${this.position}] ${this.name} is developing react application.`;
  }
}
