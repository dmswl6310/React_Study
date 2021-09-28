function InsertArea(){

    const state = {
        message : ""
    }

    const InsertList =() =>{
        console.log(state.message)
        if(state.message !== ""){

            // 여기에서 리스트 에어리어로 데이터 값을 보내야한다.




            alert(state.message + " 일정이 등록되었습니다.")
            state.message = ""
        }else{
            alert("일정을 등록해 주세요")
        }
    }


    return(
        <div>
            <input 
            type = "text"
            name = "message"
            id ="textF"
            placeholder = "일정을 입력하세요"
            onChange = {(e)=>{
                state.message = e.target.value;
            }}
            
            ></input>
            {/* 버튼을 누르면 내용 전달 */}
            <button onClick = {InsertList}
            > + </button>
        </div>
    )
}

export default InsertArea