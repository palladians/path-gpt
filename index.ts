import { globby } from "globby";
import { readFile, writeJson } from "fs-extra";
import ignoreFiles from "./ignore.json";

const run = async () => {
  const ignoreArr = ignoreFiles.map((file) => [`!${file}`, `!**/*/${file}`]);
  const filesInCwd = await globby(["**/*", ...ignoreArr].flat(), {
    gitignore: true,
    absolute: true,
  });
  const contents = await Promise.all(
    filesInCwd.map(async (dir) => {
      const content = await readFile(dir, { encoding: "utf8" });
      return {
        filename: dir.split("/").slice(-1)[0],
        content,
      };
    })
  );
  writeJson("./out.json", contents);
  console.log(contents);
};

run();
