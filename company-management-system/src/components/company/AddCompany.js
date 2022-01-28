
import { useState } from "react";
import { connect } from "react-redux";
import { AddCompanyAction, UpdateCompanyAction} from "../../companyRedux/companyAction";
import { useNavigate } from 'react-router'

const AddCompany = (props) => {

    let navigate = useNavigate();

    const [company, setCompany] = useState({
        id :props.company.id, 
        c_name:props.company.c_name,
        c_ceo:props.company.c_ceo,
        c_founded: props.company.c_founded,
        c_head: props.company.c_head,
        c_empNo: props.company.c_empNo
    })

    const handleChange = (e) => {
        const name = e.target.name
        setCompany(
                {
                    ...company,
                    [name]: e.target.value
                }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("add form.. ",company)
        if(props.option === 'add'){
            props.AddCompanyAction(company)
            navigate('/view');
        }
        else {
            props.UpdateCompanyAction(company)
            navigate('/view');
        }
    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Company name :
                        <input
                            type="text"
                            name="c_name"
                            value = {company.c_name}
                            onChange={handleChange}
                        />
                    </label><br />
                    <label>CEO :
                        <input
                            type="text"
                            name="c_ceo"
                            value={company.c_ceo}
                            onChange={handleChange}
                        />
                    </label><br />
                    <label>Founded :
                        <input
                            type="number"
                            name="c_founded"
                            value={company.c_founded}
                            onChange={handleChange}
                        /> 
                    </label><br />
                    <label>Head quaters :
                        <input
                            type="text"
                            name="c_head"
                            value={company.c_head}
                            onChange={handleChange}
                        />
                    </label><br />
                    <label>Number of employees :
                        <input
                            type="number"
                            name="c_empNo"
                            value={company.c_empNo}
                            onChange={handleChange}
                        />
                    </label><br />

                    <input type="submit" />
                    <div>
                        <button>Add Contacts</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    
    return {
        
        AddCompanyAction: (company) => dispatch(AddCompanyAction(company)),
        UpdateCompanyAction : (company) => dispatch(UpdateCompanyAction(company))
    }
}

export default connect(null,mapDispatchToProps)(AddCompany)