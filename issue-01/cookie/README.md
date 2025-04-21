# Javascript-Laboratory
- 자바스크립트의 다양한 실험과 학습 결과를 공유하기 위한 레포입니다.
- 새로운 아이디어를 테스트하거나,
- 기존 알고리즘/라이브러리 등을 분석하거나,
- 자바스크립트로 만들 수 있는 재미있는 것들을 실험하며 서로가 얻은 인사이트를 공유하는 것을 목표로 하고 있습니다.

---
## PR규칙
PR 제목에는 본인의 이름을 명시해 주시고, 구체적인 요약을 작성해 주시기 바랍니다.
### ex:
```markdown
# [정명기] Context API와 Zustand의 전역 상태 관리

## 요약
1. Context API의 전역상태 관리 방법
2. Zustand의 전역상태 관리 방법
3. 차이점

## 코드
  import React, { createContext, useContext, useState } from 'react';

  // Context 생성
  const StateContext = createContext();

  // Provider 컴포넌트 정의
  export const StateProvider = ({ children }) => {
    const [state, setState] = useState({ count: 0 });
    return (
      <StateContext.Provider value={{ state, setState }}>
        {children}
      </StateContext.Provider>
    );
  };

  // 전역 상태를 사용하기 위한 커스텀 훅
  export const useStateValue = () => useContext(StateContext);

## 추가적인 실험 방향
```
