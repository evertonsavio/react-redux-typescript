import { useState } from "react";
import { useSelector } from "react-redux";
/* V1 import { useDispatch } from "react-redux";
import { actionCreators } from "../state"; */
import { useActions } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    // V1 const dispatch = useDispatch();
    const { searchRepositories } = useActions();
    const {data, error, loading} = useSelector((state: any) => state.repositories)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //V1 dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term);
    };

    return <div>

        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>

    </div>
}
export default RepositoriesList;