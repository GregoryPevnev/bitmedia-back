const CHUNK_SIZE = 100;

const chunk = records => {
  const chunks = []
  let chunk = [], prevChunk = 0;

  for (let i = 0; i < records.length; i++) {
    if ((i - prevChunk) >= CHUNK_SIZE) {
      chunks.push(chunk);
      chunk = [];
      prevChunk = i;
    }

    chunk.push(records[i]);
  }

  return [...chunks, chunk];
}

const populate = tableName => records => async knex => {
  const countResult = await knex(tableName).count({ count: "*" });

  if (countResult[0].count === records.length) return Promise.resolve();

  await knex(tableName).delete();

  await Promise.all(chunk(records).map(
    chunk => knex(tableName).insert(chunk)
  ));
};

module.exports = populate;
