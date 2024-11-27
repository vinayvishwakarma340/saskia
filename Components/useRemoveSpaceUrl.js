const useRemoveSpaceUrl = (value) => {
    return value
        ?.replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .split("---")
        .join("-")
        .toLowerCase();
};

export const removeSpaceLowerCase = (value) => {
    return value
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .split("---")
        .join("-")
        .toLowerCase();
};
export default useRemoveSpaceUrl;