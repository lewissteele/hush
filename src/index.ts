interface Config{
  secret: string
}

function hush (config: Config): string {
  return config.secret
}

export default hush;
