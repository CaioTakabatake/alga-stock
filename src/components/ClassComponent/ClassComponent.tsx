import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
  constructor(props: any) {
    super(props);
    console.log("Constructor reached");
  }

  state = {
    name: "World",
  };

  componentDidMount(): void {
    console.log("did mount reached");
  }

  componentDidUpdate(): void {
    console.log("did update reached")
  }

  render(): React.ReactNode {
    console.log("Render reached");
    return (
      <div>
        <p>name: {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Daniel" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
