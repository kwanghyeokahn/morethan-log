//import { TPosts } from "src/types"

//export function getAllSelectItemsFromPosts(
//  key: "tags" | "category",
//  posts: TPosts
//) {
//  const selectedPosts = posts.filter((post) => post?.[key])
//  const items = [...selectedPosts.map((p) => p[key]).flat()]
//  const itemObj: { [itemName: string]: number } = {}
//  items.forEach((item) => {
//    if (!item) return
//    if (item in itemObj) {
//      itemObj[item]++
//    } else {
//      itemObj[item] = 1
//    }
//  })
//  return itemObj
//}


import { TPosts } from "src/types"

export function getAllSelectItemsFromPosts(
  key: "tags" | "category",
  posts: TPosts
) {
  const selectedPosts = posts.filter((post) => post?.tags?.includes("category")) // tags 값에 "category"가 포함된 포스트들을 필터링합니다.
  const items = [...selectedPosts.map((p) => p[key]).flat()]
  const itemObj: { [itemName: string]: number } = {}
  items.forEach((item) => {
    if (!item) return
    if (item in itemObj) {
      itemObj[item]++
    } else {
      itemObj[item] = 1
    }
  })
  return itemObj
}
