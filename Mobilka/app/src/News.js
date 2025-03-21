import './News.css'

function News(){
    return(
        <div className="div-content-new">
            <div className="div-imp-news">
                <h2>Здесь должна быть ваша картинка</h2>
            </div>

            <div className="div-text-content"> 
                <h3>Заголовок</h3>
                <p className="p-txt">Здесь ваш текст</p>
                <p className="p-date">Здесь ваша дата</p>
            </div>
        </div>
    )
}

export default News;