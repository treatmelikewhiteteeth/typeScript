/* 사용자 정보 변수 3개 생성 */
let userName: string = "철수";
let userAge: number = 22;
let isAdult: boolean = userAge >= 20; // 20 이상이면 true, 아니면 false

/* 환영 메시지 생성 */
let welcomeMessage: string = `환영합니다, ${userName}님! 당신은 올해 ${userAge}살입니다.`;

/* 결과 출력 */
console.log(welcomeMessage);
console.log(`성인 여부: ${isAdult}`);
