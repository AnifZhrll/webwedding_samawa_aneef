export async function getData(slug: string) {
    try {
      const req = await fetch(
        `${process.env.HOST_API}/api/wedding-package/${slug}`,
        {
          method: "GET",
          cache: "no-cache",
        }
      );
  
      return req.json();
    } catch (error) {
      console.log(error);
    }
  }