import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';

import Masonry from 'react-masonry-css'

import './style.css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { Link } from 'react-router-dom';


function Home() {
    const characters = useSelector((state) => state.characters.items);
    const status = useSelector((state) => state.characters.status);
    const error = useSelector((state) => state.characters.error);
    const page = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);


    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCharacters());
        }
    }, [dispatch, status]);

    if (status === 'failed') {
        return <Error message={error} />
    }
    console.log(status);
    return (
        <div>
            <h1>Characters</h1>
            <Masonry
                breakpointCols={6}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {characters.map(character => (
                    <div key={character.char_id}>
                        <Link to={`/detail/${character.char_id}`}>
                            <img className='character' src={character.img} alt={character.name} />
                            <p>
                                <strong>
                                    {character.name}
                                </strong>
                            </p>
                        </Link>
                    </div>

                ))}

            </Masonry>

            <div className='more__Button'>
                {
                    hasNextPage && (
                        <button disabled={status} onClick={() => dispatch(fetchCharacters(page))}>{status === 'loading' && <Loading />}{status !== 'loading' && 'Load More...'}</button>
                    )
                }
                {
                    !hasNextPage && (
                        <div>
                            There is noting to be shown!
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Home