import React from 'react'

class PlayList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.selectPlayList(this.props.routeParams.playListId);
  }

  render() {
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}

export default PlayList;