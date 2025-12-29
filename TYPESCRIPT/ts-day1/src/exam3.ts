/* 프로젝트 이름 배열 선언 */
let projectNames: string[] = ["A 프로젝트", "B 프로젝트", "C 프로젝트"];

/* 사용자 레코드 튜플 선언 */
let userRecord: [number, string, boolean] = [1001, "김민수", true];

/* 배열의 두 번째 요소를 변수에 안전하게 할당 */
let secondProject: string | undefined = projectNames[1];

/* 튜플에서 사용자 이름을 변수에 안전하게 할당 */
let recordName: string = userRecord[1];

/* 결과 출력 */
if (secondProject !== undefined) {
    console.log(`두 번째 프로젝트: ${secondProject}`);
} else {
    console.log("두 번째 프로젝트가 존재하지 않습니다.");
}

console.log(`사용자 이름: ${recordName}`);
