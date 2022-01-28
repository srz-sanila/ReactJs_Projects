import { connect } from "react-redux";
import { GetCompanyAction, DeleteCompanyAction } from "../../companyRedux/companyAction";
import { Link } from 'react-router-dom';

const DisplayCompany = (props) => {

    console.log("inside display ...", props)
    return (
        <div>display..<br />
            <button onClick={props.GetCompanyAction}>View..</button><hr/>
            <div >
                {props.comp.map((cmp, i = 0) => {
                    return (

                        <ul key={i + 1} style={{listStyleType: "none"}}>
                            <li>Id : {cmp.id}</li>
                            <li>name :{cmp.c_name}</li>
                            <li>ceo:{cmp.c_ceo}</li>
                            <li>founded:{cmp.c_founded}</li>
                            <li>head:{cmp.c_head}</li>
                            <li>empNo:{cmp.c_empNo}</li><br/>
                            <li><button onClick={() => props.DeleteCompanyAction(cmp.id)}>Delete</button></li>
                            <li><button >
                            <Link to='/edit' state={{company:cmp}}>Edit</Link></button></li>
                            <hr/>
                        </ul>
                        
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comp: state.company
    }
}

const mapDispatchToProps = dispatch => {
    return {

        GetCompanyAction: () => dispatch(GetCompanyAction()),
        DeleteCompanyAction : (c_id) =>dispatch(DeleteCompanyAction(c_id))    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCompany)