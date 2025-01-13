
export function DateToString(date:Date):string{
    return new Date(date).toLocaleDateString("en-US",{
      month:"long",
      day:"numeric",
      year:"numeric"
    })
  }