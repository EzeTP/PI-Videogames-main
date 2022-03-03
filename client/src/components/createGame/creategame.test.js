import React from "react";
import CreateGame from "./CreateGame";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";

describe("<Form /> Mounted", () => {
  const component = (
    <Provider store={store}>
      <BrowserRouter>
        <CreateGame />
      </BrowserRouter>
    </Provider>
  );

  it('El form debe tener un label que diga: "Name:"', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("input")[0];
    expect(element.className).toBe("nameForm");
    expect(element.required).toBe(true);
    expect(element.title).toBe("Name");
    expect(element.type).toBe("text");
  });

  it('El form debe tener un label que tenga de titulo: "Released:"', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("input")[1];
    expect(element.title).toBe("Released");
    expect(element.className).toBe("releasedForm");
    expect(element.required).toBe(true);
    expect(element.type).toBe("date");
  });
  it('El form debe tener un label "Released" que contenga: ', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("input")[2];
    expect(element.className).toBe("ratingForm");
    expect(element.title).toBe("Rating");
    expect(element.required).toBe(true);
    expect(element.type).toBe("number");
  });
  it('El form debe tener un label "Released" que contenga: ', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("input")[3];
    expect(element.className).toBe("imageForm");
    expect(element.title).toBe("Image");
    expect(element.required).toBe(true);
    expect(element.type).toBe("text");
  });
  it('El form debe tener un label "Released" que contenga: ', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("textarea")[0];
    expect(element.className).toBe("descriptionForm");
    expect(element.title).toBe("Description");
    expect(element.required).toBe(true);
  });
  it('El form debe tener un label "Released" que contenga: ', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("select")[0];
    expect(element.className).toBe("genresForm");
    expect(element.title).toBe("Genres");
    expect(element.required).toBe(true);
  });
  it('El form debe tener un label "Released" que contenga: ', () => {
    const { container } = render(component);
    const element = container.querySelectorAll("select")[1];
    expect(element.className).toBe("platForm");
    expect(element.title).toBe("Platforms");
    expect(element.required).toBe(true);
  });
});
