/* 1. 점수 변수 3개 생성 */
let mathScore: number = 85;
let englishScore: number = 92;
let scienceScore: number = 78;

/* 2. 세 변수의 합계를 totalScore에 저장 */
let totalScore: number = mathScore + englishScore + scienceScore;

/* 3. 세 과목의 평균을 averageScore에 저장 */
let averageScore: number = totalScore / 3;

/* 4. 결과 출력 */
console.log(`총점: ${totalScore}`);
console.log(`평균: ${averageScore}`);
