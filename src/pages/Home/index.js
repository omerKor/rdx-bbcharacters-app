import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';

import Masonry from 'react-masonry-css'

import './style.css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function Home() {

    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);
    const page = useSelector((state) => state.characters.page);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (error) {
        return <Error message={error} />
    }
    return (
        <div>
            <h1>Characters</h1>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {characters.map(character => (
                    <div key={character.char_id}>
                        <img className='character' src={character.img} alt={character.name} />
                        <p>
                            <strong>
                                {character.name}
                            </strong>
                        </p>
                    </div>
                ))}
            </Masonry>
            <div className='more__Button'>

                <button disabled={isLoading} onClick={() => dispatch(fetchCharacters(page))}>{isLoading && <Loading />}{!isLoading && 'Load More...'}</button>
            </div>

        </div>
    )
}

export default Home