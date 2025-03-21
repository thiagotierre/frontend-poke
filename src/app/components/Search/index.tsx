import React from 'react';
import './search.scss';

interface SearchProps {
    handleSearch: (query: string) => void;
}

export const Search = ({handleSearch}:SearchProps) => {
    const [search, setSearch] = React.useState("");
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSearch(search);
        setSearch("");
    }


    return (
        <div className="search">
            <form onSubmit={event => onSubmit(event)}>
                <input type="text" value={search} onChange={vl => setSearch(vl.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}