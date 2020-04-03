import {
  actionMemoriesDeleteOne,
  actionMemoriesUpsertOne
} from "./memories.actions";

describe("Books Actions", () => {
  it("should create ActionMemoriesUpsertOne action", () => {
    const action = actionMemoriesUpsertOne({
      memory: {
        id: "1",
        title: "test",
        author: "test",
        text: ""
      }
    });
    expect(action.type).toEqual(actionMemoriesUpsertOne.type);
    expect(action.memory).toEqual(
      jasmine.objectContaining({
        id: "1",
        title: "test",
        author: "test",
        text: ""
      })
    );
  });

  it("should create ActionBooksDeleteOne action", () => {
    const action = actionMemoriesDeleteOne({ id: "1" });
    expect(action.type).toEqual(actionMemoriesDeleteOne.type);
    expect(action.id).toEqual("1");
  });
});
