import streamlit as st


st.set_page_config(
    page_title="AI 협업 개발 실습",
    page_icon="🤖",
    layout="centered",
)


st.title("AI 협업 개발 실습용 첫 번째 Streamlit 앱")
st.write("이 앱은 Python과 Streamlit으로 만든 가장 기본적인 웹앱입니다.")

name = st.text_input("이름을 입력하세요", placeholder="예: 홍길동")

if name:
    st.success(f"{name}님, 첫 번째 Streamlit 앱에 오신 것을 환영합니다.")
else:
    st.info("이름을 입력하면 환영 메시지가 표시됩니다.")

st.divider()

st.subheader("실습 체크리스트")
st.checkbox("app.py 파일 생성하기")
st.checkbox("Streamlit 앱 실행하기")
st.checkbox("입력 위젯 동작 확인하기")

st.caption("실행 명령어: streamlit run app.py")
