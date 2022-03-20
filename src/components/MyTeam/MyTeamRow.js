import ProgressBar from './ProgressBar';
import './MyTeamRow.css'

function MyTeamRow({employee}) {
    let availabilityCounter=1;
    return (
            <tr>
            <td></td>
            <td>{employee.name.last} {employee.name.first}</td>
            <td>{employee.gcm}</td>
            <td>{}</td>
            <td>
                <ProgressBar/> 
                <button></button>
            </td>
        </tr>
    );
  }
  
  export default MyTeamRow;
  