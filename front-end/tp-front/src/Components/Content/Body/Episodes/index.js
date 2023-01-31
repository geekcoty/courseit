import React from "react";
import EpiThumb from "./EpiThumb";

class Episodes extends React.Component {
  render() {
    const { type, episodes } = this.props;
    return (
      <div>
        {type === "serie" &&
          episodes &&
          episodes[0]?.season.map((item) => {
            return (
              <EpiThumb
                test="test"
                data={episodes[0].season}
                key={item.id}
                {...item}
              />
            );
          })}
      </div>
    );
  }
}
export default Episodes;
