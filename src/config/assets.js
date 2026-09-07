/**
 * 静态资源配置中心
 *
 * 所有可能频繁更换的图片都在这里登记，组件只通过 IMAGES.xxx 取 URL，
 * 换图 / 换存储只改这个文件（或 .env），不需要改组件代码。
 *
 * 多源支持：
 *   - ASSET_SOURCES 里可以登记多个 baseURL（Supabase、CDN、其他 bucket…）
 *   - IMAGE_MANIFEST 中的条目默认走 DEFAULT_ASSET_SOURCE，
 *     也可以写成 { path, source } 单独指定来源
 *
 * 环境变量（写在 .env / .env.local，Vite 只暴露 VITE_ 前缀）：
 *   VITE_ASSET_SOURCE    切换默认源的名字，例如 "cdn"
 *   VITE_ASSET_BASE_URL  直接覆盖默认源的 baseURL，例如本地联调指向测试 bucket
 */

const env = import.meta.env ?? {}

/** 资源源列表：名字 -> baseURL（不带末尾斜杠） */
export const ASSET_SOURCES = {
  supabase: 'https://ptlufrvhhdzbrwepdlbh.supabase.co/storage/v1/object/public/wellness',
  // cdn: 'https://cdn.example.com/wellness',
}

/** 默认资源源 */
export const DEFAULT_ASSET_SOURCE = env.VITE_ASSET_SOURCE || 'supabase'

function resolveBaseUrl(source) {
  if (source === DEFAULT_ASSET_SOURCE && env.VITE_ASSET_BASE_URL) {
    return env.VITE_ASSET_BASE_URL
  }
  const base = ASSET_SOURCES[source]
  if (!base) {
    console.warn(`[assets] 未知的资源源 "${source}"，回退到 "${DEFAULT_ASSET_SOURCE}"`)
    return ASSET_SOURCES[DEFAULT_ASSET_SOURCE]
  }
  return base
}

/**
 * 把相对路径拼成完整 URL。已经是绝对 URL / data URI 的原样返回。
 * @param {string} path   相对 bucket 根的路径，例如 "doctors/0_jin.jpg"
 * @param {string} source ASSET_SOURCES 中的名字，默认 DEFAULT_ASSET_SOURCE
 */
export function assetUrl(path, source = DEFAULT_ASSET_SOURCE) {
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = resolveBaseUrl(source).replace(/\/+$/, '')
  return `${base}/${path.replace(/^\/+/, '')}`
}

/**
 * 图片清单：key 按“用途”命名，值为相对路径或 { path, source }。
 * 换图只需改这里的路径，key 保持不变。
 */
const IMAGE_MANIFEST = {
  // 品牌
  logo: 'logo.jpg',
  logoFull: 'logo_full.jpg',

  // 首页
  hero: 'tea_full.jpg',
  about: 'tea.jpg',
  founder: 'doctors/helena.jpg',

  // AI 评估
  aiHero: 'AI-hero.jpg',
  aiDevice: 'matrix1.jpg',

  // 联系
  wechatQr: 'qr-code.jpg',

  // 医师照片
  doctorJin: 'doctors/0_jin.jpg',
  doctorQian: 'doctors/1_qian.png',
  doctorWang: 'doctors/2_wang.png',
  doctorGao: 'doctors/3_gao.jpg',
  doctorHelena: 'doctors/helena.jpg',
}

/** 解析后的图片 URL 表，组件直接用 IMAGES.logo 这样取值 */
export const IMAGES = Object.fromEntries(
  Object.entries(IMAGE_MANIFEST).map(([key, entry]) => {
    const { path, source } = typeof entry === 'string' ? { path: entry } : entry
    return [key, assetUrl(path, source)]
  })
)

export default IMAGES
