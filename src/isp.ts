abstract class Developer {
  abstract 출근(): void;
  abstract 퇴근(): void;

  abstract react개발(): void;
  abstract spring개발(): void;
}

class FrontendDeveloper extends Developer {
  출근() {
    console.log("출근합니다.");
  }

  퇴근() {
    console.log("퇴근합니다.");
  }

  react개발() {
    console.log("React로 개발합니다.");
  }

  spring개발() {
    throw new Error("Frontend 개발자는 Spring 개발을 할 수 없습니다.");
  }
}

class BackendDeveloper extends Developer {
  출근() {
    console.log("출근합니다.");
  }

  퇴근() {
    console.log("퇴근합니다.");
  }

  react개발() {
    throw new Error("Backend 개발자는 React 개발을 할 수 없습니다.");
  }

  spring개발() {
    console.log("Spring으로 개발합니다.");
  }
}
