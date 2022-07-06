
import './app-info.css';

const AppInfo = ({totalEployers, totalRiseEmployers}) => {
    return (
        <div className="app-info">
            <h1>Acounting members at company </h1>
            <h2>Общее число сотрудников : {totalEployers} </h2>
            <h2>Премию получат : {totalRiseEmployers}</h2>
            
        </div>
    )
}

export default AppInfo;