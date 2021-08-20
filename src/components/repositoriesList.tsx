import { useState } from "react";
/* V2 import { useSelector } from "react-redux"; */
import { useTypedSelector } from "../hooks/useTypedSelection";
/* V1 import { useDispatch } from "react-redux";
import { actionCreators } from "../state"; */
import { useActions } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    // V1 const dispatch = useDispatch();
    const { searchRepositories } = useActions();
    // V2 const {data, error, loading} = useSelector((state: any) => state.repositories)
    const {data, error, loading} = useTypedSelector(
        (state) => state.repositories
    );

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