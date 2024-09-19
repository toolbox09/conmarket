import { useNavigate } from 'react-router-dom';

export function useNavigateQuery() {
    const navigate = useNavigate();
    return function (path : string, init?: string[][] | Record<string, string> | string | URLSearchParams) {
        const queryParams = new URLSearchParams(init);
        navigate({
            pathname: path,
            search: `?${queryParams.toString()}`
        })
    }
}