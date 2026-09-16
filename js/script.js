// 키보드가 눌렸을 때 실행되는 이벤트 리스너
document.addEventListener('keydown', function(event) {
    // body 태그에 적어둔 이전/다음 페이지 주소를 가져옵니다.
    const body = document.querySelector('body');
    const prevPage = body.getAttribute('data-prev');
    const nextPage = body.getAttribute('data-next');

    // 오른쪽 방향키(ArrowRight)를 눌렀고, 다음 페이지 주소가 있다면 이동
    if (event.key === 'ArrowRight' && nextPage !== "") {
        window.location.href = nextPage;
    }
    
    // 왼쪽 방향키(ArrowLeft)를 눌렀고, 이전 페이지 주소가 있다면 이동
    if (event.key === 'ArrowLeft' && prevPage !== "") {
        window.location.href = prevPage;
    }
});