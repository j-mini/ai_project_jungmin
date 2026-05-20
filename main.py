import streamlit as st


st.title("첫 번째 Streamlit 앱")
st.write("AI 협업 개발 실습용 기본 앱입니다.")

# 사용자에게 간단한 안내 문구를 보여줍니다.
st.info("이 앱은 이름을 입력하고 실습을 시작해보는 기본 예제입니다.")

# 이름을 입력받는 칸입니다.
name = st.text_input("이름을 입력하세요")

# 화면을 구분하기 위한 선입니다.
st.divider()

# 버튼을 누르면 환영 메시지를 보여줍니다.
if st.button("실습 시작"):
    if name:
        st.success(f"{name}님, 환영합니다! 실습을 시작해볼까요?")
    else:
        st.warning("이름을 먼저 입력해주세요.")
