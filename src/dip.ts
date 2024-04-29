export class Nest {
  public develop() {
    return "Developing Nest";
  }
}

export class Spring {
  public develop() {
    return "Developing Spring";
  }
}

/**
 * Developr 클래스가 Nest와 Spring 클래스에 의존하고 있다.
 *
 * 이에 따라 새로운 개발 환경이 추가되었을 때, Developer 클래스를 수정해야한다.
 */
export class Developer {
  private nest: Nest;
  private spring: Spring;

  public setNest(nest: Nest) {
    this.nest = nest;
  }

  public setSpring(spring: Spring) {
    this.spring = spring;
  }

  public develop() {
    return this.nest.develop ?? this.spring.develop;
  }
}
