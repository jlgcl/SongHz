import React, { useEffect, useState } from 'react';
import './discography.css';

const Discography = (props) => {
  let initialState = [
    {
      id: '',
      title: '',
      released: '',
      label: '',
      sales: '',
      artist: '',
    },
  ];
  const [disco, setDisco] = useState(initialState);

  // fetchSongwriterDisco...

  // props is undefined at start; causing issues for disco state
  const fetchArtistDisco = async () => {
    let settings = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      let fetchRes = await fetch(
        `http://localhost:8080/artist/${props.artist.name}/discography`,
        settings
      );
      let resJson = await fetchRes.json();
      setDisco(resJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  // useEffect runs after initial render.
  useEffect(() => {
    if (props.artist.name !== '') {
      fetchArtistDisco(); // runs only if props is defined
    }
  }, [props]);

  return (
    <div className="disco_parent" id={props.artist.name}>
      <div className="disco_content">
        <div className="disco_header">DISCOGRAPHY</div>
        <table className="disco_table">
          <tbody>
            <tr className="disco_header_row">
              <th>Title</th>
              <th>Released</th>
              <th>Label</th>
              <th>Sales</th>
              <th>Artist</th>
            </tr>
            {disco.map((data) => (
              <tr key={data.id} className="disco_value_rows">
                <td>{data.title}</td>
                <td>{data.released}</td>
                <td>{data.label}</td>
                <td>{data.sales}</td>
                <td>{data.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Discography;
