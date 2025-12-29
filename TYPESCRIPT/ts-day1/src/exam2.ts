/* 면적을 계산하고 문자열로 반환하는 함수 작성 */
function calculateArea(width: number, height: number): string {
    let area: number = width * height;
    return `면적은 ${area} 입니다.`;
}

/* 함수 호출 및 결과 저장 */
let result: string = calculateArea(10, 15);

/* 결과 출력 */
console.log(result);
