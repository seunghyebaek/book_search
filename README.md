
## 도서 검색 사이트 구현 
1. [도서검색 사이트] 구현
    - [리스트], [상세] 2개의 화면을 가진다.
    - [리스트] 화면에서 결과값 중 하나를 선택하면 세부정보를 보여주는 [상세] 화면을
    보여준다
2.요구사항
    1. next.js 으로 구현
    2. typescript, react (cra) 를 사용하여 개발한다.
    3. github issues를 사용하여 이슈 관리한다.
    4. 테스트 코드 작성
3. 세부 구현 내용
    1. [리스트]특정 키워드에 대해 검색된 서적 정보를 보여준다.
        - JSON으로 받은 데이터 중 다음 프로퍼티를 필수로 화면에 보여주어야한다.
            
            ```json
            {
                "title": "MongoDB in Action, 2nd Edition",
                "subtitle": "Covers MongoDB version 3.0",
                "image": "https://itbook.store/img/books/9781617291609.png",
                "url": "https://itbook.store/books/9781617291609"
            }
            ```
            
        - 무한 스크롤이 될 수 있게 한다.
        - 특정 키워드를 입력받을 수 있도록 한다. 키워드는 최대 2개이고 ‘or’ 와 ‘not’ operator로
        구분된다.
            - ‘or(|)’ operator는 각각의 키워드로 검색한 결과를 합쳐서 보여준다. (e.g. ‘tdd|javascript’ : tdd로 검색한 결과와 jvascript으로 검색한 결과를 합쳐서 보여준다.)
            - ‘not(-)’ operator는 앞의 키워드가 제목에 포함된 서적을 검색하되 뒤의 키워드가 포함되지
            않은 서적들을 보여준다. (e.g. ‘tdd-javascript’ : tdd가 제목에 포함된 서적을 검색하되
            javascript라는 키워드를 가지고 있는 서적은 제외한다.)
    2. [상세]: 서적 리스트 중 선택된 서적의 상세 정보를 보여준다.
        - JSON으로 받은 데이터 중 다음 프로퍼티를 필수로 화면에 보여주어야한다.
        
        ```json
        {
        	"title":"MongoDB in Action, 2nd Edition",
        	"subtitle":"Covers MongoDB version 3.0",
        	"authors":"Kyle Banker, Peter Bakkum, Shaun Verch, Douglas Garrett, Tim Hawkins",
        	"publisher":"Manning",
        	"pages":"480",
        	"rating":"4",
        	"desc":"MongoDB in Action, 2nd Edition is a completely revised and updated version. It introduces MongoDB 3.0 and the document-oriented database model. This perfectly paced book gives you both the big picture you'll need as a developer and enough low-level detail to satisfy system engineers.MongoDB in ...",
        	"price":"$19.99",
        	"image":"https://itbook.store/img/books/9781617291609.png",
        }
        ```
        

## API

- API documents
    - https://api.itbook.store/
- 도서 리스트 및 검색
    - `https://api.itbook.store/1.0/search/{keyword}/{pageNumber}`
- 도서 상세
    - `https://api.itbook.store/1.0/books/{isbn13}`
