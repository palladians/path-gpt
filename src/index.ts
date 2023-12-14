import { globby } from "globby";
import { readFile, writeJson } from "fs-extra";
import ignoreFiles from "./ignore.json";
import path from "path";

const run = async () => {
  const currentPath = process.cwd();
  const ignoreArr = ignoreFiles.map((file) => [`!${file}`, `!**/*/${file}`]);
  const filesInCwd = await globby(["**/*", ...ignoreArr].flat(), {
    gitignore: true,
    absolute: false,
  });
  const contents = await Promise.all(
    filesInCwd.map(async (dir) => {
      const content = await readFile(path.join(currentPath, dir), {
        encoding: "utf8",
      });
      return {
        filename: dir.split("/").slice(-1)[0],
        pathname: dir,
        content,
      };
    }),
  );
  writeJson("./out.json", contents);
};

run();
