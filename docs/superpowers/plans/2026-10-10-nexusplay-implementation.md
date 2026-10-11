# NexusPlay Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 交付可用于 INFO 4115 课堂演示的 NexusPlay，完整实现十类页面及内容、功能一致的两套设计。

**Architecture:** 单一 React 应用集中管理路由、本地样本数据和筛选行为，TopNavigationLayout 与 SidebarLayout 只控制呈现。页面状态保存在 URL，设计偏好与愿望单在可用时保存于 localStorage。所有素材本地化，无服务端或必需的外部 API。

**Tech Stack:** Vite、React、TypeScript、React Router、CSS variables；Vitest、React Testing Library、user-event、jsdom、ESLint；浏览器验收优先复用已有 Playwright 工具。

**Spec:** `F:\Codex\Workspaces\nexusplay\docs\superpowers\specs\2026-10-10-nexusplay-design.md`。用户回复“继续”已批准书面规格；本实施计划等待审核。

## Global Constraints

以下原文直接来自已批准规格；每个任务均受其约束。

- “两个设计使用完全相同的信息架构、数据、内容类别、页面功能和筛选能力。”
- “网站界面沿用英文提案的英文内容；与用户沟通及本设计规格使用中文。”
- “全部新源代码、依赖、文档、截图与构建输出放在本项目 F 盘目录内。”
- “不增加 Redux、后端、数据库、大型 UI 框架或在线服务层。”
- “Game Details 从游戏卡片进入，不设置缺少游戏上下文的独立主菜单入口。”
- “文章、攻略、讨论使用页面内展开区，不增加顶级页面类型。”
- “支持 `?design=1`、`?design=2`。有效的 URL 选择优先于本机偏好；缺省读取本机偏好，再缺省为 Design 1。”
- “切换只更新设计参数与本机偏好，不清空当前路径、筛选参数或搜索内容。”
- “初始间距参考：Design 1 分区约 24px、卡片间约 12px；Design 2 分区约 40px、卡片间约 24px。桌面侧栏约 224px，实际尺寸在视觉验收中调整，不通过固定高度裁切内容。”
- “页面持续提供简短的 `Class prototype · Illustrative data` 提示；优惠与日历另外明确价格及日期为样本，不按机器当前日期动态隐藏课堂数据。”
- “重点验收 1440px 和 1920px，并检查 1024px、768px；额外做一次约 390px 的基本可用性检查。”
- “正文对比度至少 4.5:1，大字与重要界面边界按相应可访问性标准检查。”
- “不实现登录、注册、个人资料、发帖、消息、论坛后端、购物车、结账、支付、管理后台、AI 推荐、数据库或云端服务。”

## Review Focus

这五类风险落实到下列任务的具体测试，不只留作审查提醒。

1. 深链接中的无效筛选、空格搜索和设计参数：显示可用默认状态，不崩溃；任务 2、3。
2. 切换布局导致组件重挂载或历史状态丢失：搜索结果、排序与当前路径保持一致，前进后退可恢复；任务 3、10。
3. localStorage 被浏览器拒绝或保存内容损坏：主要浏览继续，愿望单退回本次会话状态；任务 2、4。
4. 日期因本地时区跨日或按当前日期失效：日期和月份分组稳定，样本发售始终可展示；任务 1、8。
5. 小屏长标题、键盘导航及图片失败：不横向溢出，菜单能关闭并恢复焦点，图片区域提供本地回退；任务 2、9、10。

---

## 执行前提与协作规则

当前仓库只有设计文档，尚无应用代码。读取规格与本计划后再实现，不把计划中的预计结果当成测试证据。执行前读取 using-git-worktrees、subagent-driven-development、test-driven-development；遇到失败使用 systematic-debugging。用户已选择子代理执行，不再询问执行方式。

当前本机已验证 Node v24.14.0、npm 11.9.0、Git 可用。依赖具体版本在任务 1 安装时核查兼容性，提交 lockfile；不使用未核实的历史版本号。系统 bash 指向 Windows WSL 入口，不能假定可运行技能脚本；优先探测 Git Bash，必要时按技能允许的方式用 PowerShell 生成任务简报、进度账本与 diff 包。

执行准备由控制代理完成：

- [ ] 读取仓库状态和最近提交，确认本计划、规格已记录；不要覆盖未提交内容。
- [ ] 按 using-git-worktrees 检查 git-dir、git-common-dir、分支和既有 worktree。若仓库适用，在 `F:\Codex\Workspaces\nexusplay\.worktrees\implementation` 创建 `feat/nexusplay-prototype`，先确保 `.worktrees/` 被忽略；已处于合适工作树则复用。下文路径均相对于实际工作树根目录。
- [ ] 将 npm 缓存和浏览器测试输出放在该工作树内被忽略的 `.cache/`、`artifacts/`；不得为权限问题退回 C 盘创建项目内容。需要 F 盘访问时通过工具申请。
- [ ] 为本计划建立独立 SDD 账本，记录基线提交、任务依赖和共享接口冲突检查表。
- [ ] 每个任务派遣新的实现子代理，再派遣独立任务审查者；顺序为实现、自查、规格与质量审查、修复、通过后进入下一任务。任务间共享文件较多，不同时修改同一工作树。多代理用于明确分工与独立审查，不强行并行写代码。
- [ ] 每个实现者拿到规格、本任务全文、Global Constraints、前置接口、工作树绝对路径和报告路径；报告记录红灯、绿灯命令及真实结果。审查者收到任务起止提交的完整 diff 包，不能以 HEAD~1 代替多提交任务范围。

## 文件与接口地图

| 文件或目录 | 唯一主要职责 | 创建任务 |
| --- | --- | --- |
| `package.json`, `package-lock.json`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `vite.config.ts`, `eslint.config.js`, `.gitignore` | 构建、检查和测试配置 | 1 |
| `src/data/{types,games,news,guides,reviews,discussions,deals,releases}.ts` | 类型与集中样本数据 | 1 |
| `src/utils/{catalog,format}.ts`, `src/test/setup.ts` | 可测试的查询、显示格式和测试初始化 | 1 |
| `public/assets/`, `docs/asset-sources.md` | 本地素材、回退图和来源记录 | 1 |
| `index.html`, `src/main.tsx`, `src/app/{App,DesignProvider}.tsx`, `src/app/navigation.ts` | 应用入口、设计状态和导航定义 | 2 |
| `src/layouts/{AppShell,TopNavigationLayout,SidebarLayout}.tsx` | 双布局容器 | 2 |
| `src/components/navigation/{Navigation,DesignSwitcher,DesignLink}.tsx`, `src/hooks/usePageQuery.ts` | 共用导航、链接与 URL 状态 | 2 |
| `src/components/common/{PageHeader,SectionHeader,EmptyState,LocalImage}.tsx`, `src/pages/NotFound.tsx` | 页面基本呈现、容错 | 2 |
| `src/styles/{tokens,base,layout}.css`, `src/test/renderApp.tsx` | 视觉基础和路由测试工具 | 2 |
| `src/components/games/{GameCard,GameGrid,RatingBadge,GameFilters}.tsx`, `src/pages/Discover.tsx` | 游戏发现 | 3 |
| `src/hooks/useWishlist.ts`, `src/pages/GameDetails.tsx` | 详情与本机愿望单 | 4 |
| `src/components/content/{NewsCard,GuideCard}.tsx`, `src/pages/{News,Guides}.tsx` | 新闻与攻略 | 5 |
| `src/components/content/{ReviewCard,DiscussionCard}.tsx`, `src/pages/{Community,Reviews}.tsx` | 玩家内容和排名 | 6 |
| `src/components/content/DealCard.tsx`, `src/pages/Deals.tsx` | 优惠浏览 | 7 |
| `src/components/content/ReleaseList.tsx`, `src/pages/{ReleaseCalendar,Platforms}.tsx` | 月份与平台浏览 | 8 |
| `src/pages/Home.tsx`, `src/styles/pages.css` | 主页聚合及页面视觉规则 | 9；pages.css 从任务 3 起按各页增加 |
| `src/test/parity.test.tsx`, `scripts/browser-smoke.mjs`, `README.md`, `docs/verification.md` | 整体一致性、浏览器验证和交付文档 | 10 |

测试文件与被测模块同目录，例如 `src/pages/Discover.test.tsx`。上表中仅 `src/app/App.tsx` 的路由注册及页面样式由后续任务递增修改；每次只改本任务对应路由与样式。

### 共享数据类型契约

在 `src/data/types.ts` 定义下列字段，不新增未使用的通用框架：

- `Platform = 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo'`。
- `Media { src: string; alt: string; kind: 'official' | 'prototype' }`。
- `Game { id: string; slug: string; title: string; description: string; genres: string[]; platforms: Platform[]; releaseDate: string; playerRating: number; criticScore: number; ratingCount: number; recommendationPercent: number; popularity: number; cover: Media; screenshots: Media[] }`。
- `NewsCategory = 'Industry' | 'Updates' | 'Esports' | 'Releases'`；`NewsItem { id; title; category: NewsCategory; date; summary; body: string[]; image: Media; gameId?: string }`。
- `GuideType = 'Beginner' | 'Build' | 'Boss' | 'Farming' | 'Progression' | 'Collectibles'`；`Guide { id; gameId; title; type: GuideType; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; updatedDate; summary; body: string[] }`。
- `PlayerReview { id; gameId; author; score: number; excerpt }`；`Discussion { id; gameId; title; summary; body: string[]; replies: number; views: number; trending: boolean }`。
- `Deal { id; gameId; platform: Platform; store; originalCents: number; currentCents: number; status: 'Sample active' | 'Sample ended' }`。
- `Release { id; gameId; date; platforms: Platform[] }`。

上面没有单独注解的标量字段均为 string，日期统一 `YYYY-MM-DD`，货币固定 USD。各数据文件分别导出 `games: readonly Game[]`、`news: readonly NewsItem[]`、`guides`、`reviews`、`discussions`、`deals`、`releases` 的对应只读数组。不使用真实个人身份编造玩家发言。

## Task 1: 可验证的数据与开发基础

**Files:** 创建上述配置、八个数据文件、`src/utils/catalog.ts`、`src/utils/format.ts`、`src/test/setup.ts`、`src/data/data.test.ts`、`src/utils/catalog.test.ts`、`src/utils/format.test.ts`、本地素材和来源文档。

**Interfaces:**
- Consumes: 规格第 7 节及本计划共享类型。
- Produces: `GameQuery { q: string; genre: string; platform: Platform | ''; rating: number; year: string; sort: 'rating' | 'popularity' | 'release' | 'name' }`。
- Produces: `selectGames(items: readonly Game[], query: GameQuery): Game[]`；默认排序 popularity 降序，rating/release 降序，name 按英文名称升序，同值以 title、id 稳定排列；不修改输入。
- Produces: `discountPercent(deal: Deal): number`（向下取整）、`formatMoney(cents: number): string`、`formatDate(iso: string): string`、`monthKey(iso: string): string`，日期按 UTC 格式化、月份从 ISO 日期取 YYYY-MM。

- [ ] **Step 1:** 建立最小 package/test/typecheck 配置并安装兼容依赖；保存 lockfile。脚本固定为 `dev: vite --host 127.0.0.1`、`test: vitest`、`lint: eslint .`、`typecheck: tsc -b`、`build: tsc -b && vite build`、`preview: vite preview --host 127.0.0.1`。测试配置使用 jsdom 和 setup；浏览器脚本不纳入 Vitest。
- [ ] **Step 2:** 写失败测试 `catalog.test.ts`：使用三个显式 Game 测试样本，标题分别 Alpha/Beta/Gamma，评分 9/7/8，热度 10/30/20，日期 2021/2023/2022；断言四种排序的 ID 顺序分别为 A,C,B；B,C,A；B,C,A；A,B,C。组合筛选和大小写/前后空白搜索返回明确 ID，搜索不存在的标题返回空数组，输入顺序不变。
- [ ] **Step 3:** 写 `data.test.ts`：游戏至少 16 款、四平台均覆盖、新闻每类至少两条、全部关联 ID 有效、slug 唯一、封面及媒体文件存在、数字范围合法且价格为非负整数。写 `format.test.ts`：下列断言在不同时区下都成立。

```ts
expect(formatMoney(1999)).toBe('$19.99')
expect(monthKey('2027-01-01')).toBe('2027-01')
expect(formatDate('2027-01-01')).toBe('Jan 1, 2027')
// 对 originalCents=5999、currentCents=1499 的完整 Deal 样本
expect(discountPercent(sampleDeal)).toBe(75)
```

- [ ] **Step 4:** 执行 `npm test -- --run src/data/data.test.ts src/utils/catalog.test.ts src/utils/format.test.ts`，记录预期的缺失数据/函数导致的失败，不能把环境配置错误作为行为红灯。
- [ ] **Step 5:** 实现类型、查询函数、集中数据及本地图片。保证 Elden Ring 的 slug 为 `elden-ring`，Hades 为 `hades`，至少含提案列举的可识别游戏；样本发售覆盖至少三个月和四个平台。其他页面必须复用这些对象。图片优先有明确来源的可复用素材，否则制作并标注 prototype 的本地标题插图；提供 `/assets/fallback.svg`，记录每项素材的来源/性质，不伪装游戏截图。
- [ ] **Step 6:** 重跑上述测试、`npm run lint`、`npm run typecheck`；通过后报告真实数量。应用入口在任务 2 创建，任务 1 不声称生产构建已经可用。
- [ ] **Step 7:** 只暂存本任务文件，提交 `feat: add NexusPlay fixtures and tested catalog utilities`，完成任务审查。

## Task 2: 两套应用布局与导航状态

**Files:** 创建地图中任务 2 文件，以及 `src/app/DesignProvider.test.tsx`、`src/layouts/AppShell.test.tsx`；随后任务 3—9 只向 App 增加已经实现的路由。

**Interfaces:**
- Consumes: 任务 1 配置与数据；React Router 路由上下文。
- Produces: `DesignId = '1' | '2'`，`DesignProvider({children})`、`useDesign(): {design: DesignId; setDesign(next: DesignId): void}`，存储键 `nexusplay.design`。
- Produces: `usePageQuery(): {params: URLSearchParams; update(patch: Record<string, string | null>, options?: {replace?: boolean}): void}`；update 保留不相关参数，null 删除字段。
- Produces: `DesignLink({to, children, ...linkProps})` 保留有效 design；`AppShell()` 保持页面 Outlet 的稳定位置，两种布局组件控制导航而不按 design 替换整棵内容树；`App()` 在已有 Router 内注册路由，main.tsx 提供 BrowserRouter。
- Produces: `LocalImage({media, className?})` 一次性回退到本地图；`PageHeader({title, description?})`、`SectionHeader({title, to?, linkLabel?})`、`EmptyState({title, description, onReset?})`。
- Produces: `renderApp(initialEntries: string[], initialIndex?: number)` 测试工具，返回 RTL render 结果和可用的 memory router；使用与产品相同的路由定义。局部 shell 测试使用只存在于测试里的 Outlet 内容。

- [ ] **Step 1:** 写设计选择及 shell 失败测试。URL `?design=2` 覆盖已保存的 1；没有有效值时默认 1；对损坏值和抛出 SecurityError 的存储仍可渲染。切换后保留 `q=elden&platform=PC`，根容器 `data-design` 对应 1/2。
- [ ] **Step 2:** 写键盘菜单测试：按钮名 `Open navigation`，Enter 展开，Escape 收起并恢复按钮焦点，导航后关闭；分组符合 Home/Games/Content/Community/Deals。全站表单提交 `elden` 到 `/discover?q=elden` 并保留 design。LocalImage 触发一次 error 后 src 为本地 fallback，再失败不递归更新。
- [ ] **Step 3:** 运行 `npm test -- --run src/app/DesignProvider.test.tsx src/layouts/AppShell.test.tsx`，记录缺少实现的失败。
- [ ] **Step 4:** 实现 shell、主题变量、跳转到内容链接、标题、样本数据提示和 NotFound。主区域单一 main，键盘焦点可见；App 的路由随着页面任务加入，不制作假的完整页面。root 路由在任务 9 完成前可暂指向已实现的 Discover（任务 3 后），不能将这一阶段称为完成。
- [ ] **Step 5:** 重跑定向测试、lint、typecheck、build，确认应用入口和构建链路可用；提交 `feat: add accessible dual layouts and shared navigation` 并审查。

## Task 3: Discover 搜索筛选排序

**Files:** 创建四个 games 组件、`src/pages/Discover.tsx`、`src/pages/Discover.test.tsx`；修改 App 路由，创建/追加 `src/styles/pages.css`。

**Interfaces:**
- Consumes: `games`、`GameQuery`、`selectGames`、usePageQuery、DesignLink 和公共组件。
- Produces: `GameCard({game: Game})`、`GameGrid({games: readonly Game[]})`、`RatingBadge({score: number; label?: string})`、`GameFilters({query: GameQuery; onChange: (patch: Partial<GameQuery>) => void})`、`Discover()`。
- Produces: `/discover` 使用 q/genre/platform/rating/year/sort；默认 popularity。搜索去首尾空白、忽略大小写；无效 enum/数字退回默认。reset 删除这六个参数并保留 design。

- [ ] **Step 1:** 写界面测试：搜索 `ELDEN` 只显示 Elden Ring 对应结果；`no-such-game` 显示 `No games found`；reset 恢复列表。组合平台/类型/最低评分/年份与排序必须通过屏幕上的卡片标题和顺序验证，不能只测试纯函数。
- [ ] **Step 2:** 写状态回归用例：从 `?design=1&q=elden&sort=name` 切换为 2 后，路径、输入、排序和结果不变；输入无效 `rating=oops&platform=Unknown&sort=bad` 不崩溃，控件显示默认。前进/后退恢复已设置的筛选。
- [ ] **Step 3:** 运行 `npm test -- --run src/pages/Discover.test.tsx` 确认红灯，再实现页面、筛选解析和卡片。Design 1 筛选在左，Design 2 在上；卡片显示玩家评分优先于媒体分数。
- [ ] **Step 4:** 定向测试和 lint/typecheck 通过后，提交 `feat: implement game discovery search filters and sorting` 并审查。

## Task 4: 游戏详情与本机愿望单

**Files:** 创建 `src/pages/GameDetails.tsx`、`src/hooks/useWishlist.ts`、对应两个测试文件；修改 App、pages.css。

**Interfaces:**
- Consumes: 全部关联数据、GameGrid、RatingBadge、DesignLink、LocalImage。
- Produces: `GameDetails()`；`useWishlist(gameId: string): {saved: boolean; toggle: () => void}`，键 `nexusplay.wishlist` 保存有效 ID 数组；读写失败保留会话内状态。

- [ ] **Step 1:** 写点击 Discover 的 Elden Ring 链接到 `/games/elden-ring` 的集成测试；断言一个 h1、玩家评分、媒体分数、简介、平台、图片、相关攻略/评论/优惠和相似游戏。未知 slug 显示 `Game not found` 与返回 Discover 链接。
- [ ] **Step 2:** 写愿望单测试：按钮名称 `Add to wishlist` → `Remove from wishlist` → `Add to wishlist`；重新挂载恢复保存值；无效 JSON、非数组及读取/写入异常均不阻断页面。测试一个没有相关优惠的游戏显示明确空状态。
- [ ] **Step 3:** 运行 `npm test -- --run src/pages/GameDetails.test.tsx src/hooks/useWishlist.test.tsx` 得到红灯，再实现详情。相关攻略用原生 details/summary 展开，数据从同一 guides 集合读取；不依赖任务 5 才能工作。媒体标注 kind，玩家评分视觉更突出，推荐按共同 genre/platform 确定性计算并排除当前游戏。
- [ ] **Step 4:** 运行定向测试、lint/typecheck；提交 `feat: add game details and local wishlist` 并审查。

## Task 5: 新闻与攻略浏览

**Files:** 创建 News、Guides 页面、NewsCard、GuideCard 及 `src/pages/Editorial.test.tsx`；修改 App、pages.css。

**Interfaces:**
- Consumes: news/guides/games、usePageQuery、公共组件。
- Produces: `NewsCard({item: NewsItem})`、`GuideCard({guide: Guide})`、`News()`、`Guides()`。
- Produces: News 参数 category（空为 All）；Guides 参数 game/type（空为 All）。

- [ ] **Step 1:** 实现前读取 News/Guides 的四张原始线框图，记录与已批准规格的对应关系；不更改设计方向。
- [ ] **Step 2:** 写 `Editorial.test.tsx`：选择 Industry 只展示该类新闻，All 恢复；按明确 game ID 和 Beginner 类型组合筛选只显示匹配攻略；点击文章/攻略 summary 展开完整正文；空组合有空状态。每项在设计 1 和 2 参数化执行。
- [ ] **Step 3:** 运行 `npm test -- --run src/pages/Editorial.test.tsx` 确认红灯，再实现两个页面与内容卡片；可点击标题对应真实链接或展开，不制作无作用按钮。
- [ ] **Step 4:** 定向测试及 lint/typecheck 通过后提交 `feat: add news categories and searchable guide library` 并审查。

## Task 6: 社区与玩家评分比较

**Files:** 创建 Community、Reviews 页面、ReviewCard、DiscussionCard、`src/pages/PlayerContent.test.tsx`；修改 App、pages.css。

**Interfaces:**
- Consumes: reviews/discussions/games、GameCard/RatingBadge、usePageQuery。
- Produces: `ReviewCard({review: PlayerReview})`、`DiscussionCard({discussion: Discussion})`、`Community()`、`Reviews()`。
- Produces: Community 参数 game；Reviews 固定玩家评分降序、同分标题升序，无额外排序控件要求。

- [ ] **Step 1:** 读取 Community/Reviews 四张线框图，再写失败测试：社区 game 筛选同步约束评论和讨论；只读讨论可展开；游戏链接正确。Reviews 排序与玩家评分人数、推荐百分比和次要媒体分数对应同一 Game。
- [ ] **Step 2:** 对两种设计执行断言，确认没有 `Log in`、`Create post` 或消息表单；运行 `npm test -- --run src/pages/PlayerContent.test.tsx` 得到红灯。
- [ ] **Step 3:** 实现页面及对应样式。桌面评论和讨论并排，窄屏堆叠；Reviews 保持可比较的列标签与评分层级，设计 2 用更大的行间距呈现同样字段。
- [ ] **Step 4:** 定向测试及 lint/typecheck 通过后提交 `feat: add curated community and player review rankings` 并审查。

## Task 7: 优惠筛选与价格展示

**Files:** 创建 DealCard、Deals 页面、`src/pages/Deals.test.tsx`；修改 App、pages.css。

**Interfaces:**
- Consumes: deals/games、discountPercent、formatMoney、usePageQuery。
- Produces: `DealCard({deal: Deal})`、`Deals()`；参数 platform/store/discount，discount 只接受空、20、50、75，组合条件为 AND。

- [ ] **Step 1:** 读取 Deals 两张线框图，写两种设计的失败用例：选择平台+商店+75% 后结果符合全部条件；20/50/75 边界包含等于阈值的条目；reset 恢复并保留 design；无结果显示明确空状态。断言现价/原价/折扣一致并显示 USD 与样本声明。
- [ ] **Step 2:** 运行 `npm test -- --run src/pages/Deals.test.tsx` 确认红灯，再实现页面。所有卡片可进入游戏详情；商店名称默认是信息，不为了增加按钮而创建不可靠外链。
- [ ] **Step 3:** 定向测试及 lint/typecheck 通过，提交 `feat: implement prototype deal browsing and filters` 并审查。

## Task 8: 发售日历与平台浏览

**Files:** 创建 ReleaseList、ReleaseCalendar、Platforms、`src/pages/PlatformContent.test.tsx`；修改 App、pages.css。

**Interfaces:**
- Consumes: releases/games、formatDate/monthKey、GameGrid、usePageQuery。
- Produces: `ReleaseList({items: readonly Release[]})`、`ReleaseCalendar()`、`Platforms()`；二者使用 platform 参数。日历默认 All，Platforms 默认 PC；未知平台分别回退到该默认。

- [ ] **Step 1:** 读取 Calendar/Platforms 四张线框图，再写失败测试：月份按时间升序，每组包含对应日期；选择 Nintendo 不出现其他平台专属条目。将系统时间设到全部样本之后，日历仍展示相同样本。月初日期在 UTC 与 America/Los_Angeles 下分组一致。
- [ ] **Step 2:** 测试 Platforms 选择四个平台时，Popular games、Top rated、Release preview 三节均来自选择的平台；热门按 popularity、高评分按 playerRating，预览按 date；切换设计保留平台。
- [ ] **Step 3:** 运行 `npm test -- --run src/pages/PlatformContent.test.tsx` 确认红灯，再实现两个页面。日历为示例日期明确标注，不推断其为实时即将发售。
- [ ] **Step 4:** 定向测试及 lint/typecheck 通过，提交 `feat: add release calendar and platform discovery` 并审查。

## Task 9: 完整首页与视觉整合

**Files:** 创建 Home 与 `src/pages/Home.test.tsx`；修改 App 和已建立的 tokens/base/layout/pages CSS，仅调整必要的共享组件表现。

**Interfaces:**
- Consumes: 前面任务的全部数据与展示组件。
- Produces: `Home()` 作为 `/` 的最终页面；不再有临时根路由。首页固定 featured Elden Ring，Trending/Top rated 各四款，Latest news 三条、Popular guides 三条、Deals 三条、Release preview 四条、Community highlights 两条；两种设计完全相同。

- [ ] **Step 1:** 写 Home 失败测试：featured 链接到 Elden Ring；八个约定内容分区全部存在；每个 View all 到对应页面，设计参数保留；两套设计同一分区的文本和链接目的地一致。
- [ ] **Step 2:** 运行 `npm test -- --run src/pages/Home.test.tsx` 确认红灯，再组合首页内容。保留单一主标题，featured 不占满首屏，区块适度混合网格、短列表和评分排行，避免机械重复大卡片。
- [ ] **Step 3:** 本地启动后查看两套 Home、Discover、Details 在 1440px 与 1920px 的实际页面，截图保存在 artifacts。核实设计 1 更紧凑、设计 2 侧栏及留白明显不同，检查长游戏名称不截断核心信息、玩家评分显著、所有本地图成功加载。
- [ ] **Step 4:** 根据截图修复本任务相关样式，实际测量文字对比度；样式不改变内容条目数量与顺序。重跑受影响测试、lint/typecheck/build。
- [ ] **Step 5:** 提交 `feat: complete NexusPlay home and dual-design presentation`，向审查者提供截图路径及检查结果。

## Task 10: 全站一致性、浏览器验收与交付文档

**Files:** 创建 `src/test/parity.test.tsx`、`scripts/browser-smoke.mjs`、`README.md`、`docs/verification.md`；必要时仅修改已确认缺陷的相关文件及回归测试，所有修复进入本任务 diff。

**Interfaces:**
- Consumes: 完整 App、真实 Router、所有十类页面；浏览器测试通过参数接收 base URL，输出到 artifacts。
- Produces: 可重复的验证命令、实际截图和结果记录、可照做的启动说明；不添加新产品功能。

- [ ] **Step 1:** 编写一致性测试，先实际运行并记录结果；已有功能通过是合理情况，不伪造红灯。遍历下列十个路由，对比两套设计 main 内的标题、卡片文本、条目数及链接（比较目的地时只忽略 design 参数）。不比较整个 DOM 快照，也不拿两个空数组当作内容等价。

```ts
const routes = ['/', '/discover', '/games/elden-ring', '/news', '/guides',
  '/community', '/deals', '/reviews', '/calendar', '/platforms']
// 每条路由分别渲染 ?design=1 和 ?design=2；断言核心内容非空且相同。
// 每条路由都有唯一 h1。每个浏览页的主要游戏/文章/条目集合非空。
```

- [ ] **Step 2:** 添加完整浏览旅程：Home → Discover → 搜索和组合筛选 → 切换设计 → 游戏详情 → 返回浏览。断言路由、筛选、排序、结果与 design 按规格保持；未知路由有返回链接。保持 UI 查询用语义角色/标签，不能只断言 CSS 类名。
- [ ] **Step 3:** 使用可用 Playwright 工具建立真实浏览器 smoke 脚本。若没有浏览器运行库，只增加所需的轻量 Playwright 测试依赖并在 F 盘设置浏览器缓存，不安装额外大型测试平台。启动 `npm run dev -- --port 5173`；端口占用时采用可用端口并更新记录。浏览器捕获 console.error、pageerror、失败图片及本地资源请求。
- [ ] **Step 4:** 实际打开两种设计的全部十类页面并保存 1440px 截图，另外在 1920/1024/768/390px 遍历全部路由检查 `scrollWidth <= clientWidth + 1`、图片 naturalWidth、主要控件可见性。仅自动指标不算视觉通过：人工目视每个页面的 1440px 图和两设计 Home/Discover/Details 的其他尺寸图，发现问题后扩大受影响页面检查。
- [ ] **Step 5:** 在浏览器中完成搜索、筛选、排序、空状态、reset、切换、链接跳转、页面内展开、愿望单刷新保持和小屏键盘菜单。检查 Tab/Shift+Tab 焦点、Escape 关闭、当前导航标记、长文本换行。修复时先添加失败回归用例再改代码，复查对应尺寸。
- [ ] **Step 6:** 运行最终 `npm run lint`、`npm test -- --run`、`npm run typecheck`、`npm run build`；再以 `npm run preview -- --port 4173` 实际检查生产构建的主要深链接、资源和两种设计。浏览器关闭外网或阻断非本机 HTTP 请求时再次确认本地内容正常。
- [ ] **Step 7:** 写 README：用途、英文 UI/中文运行说明、Node 要求（以安装后的依赖 engines 为准）、`npm ci`、`npm run dev`、localhost 地址、十类页面、design 参数、本机愿望单、数据/图片说明、范围限制、测试及构建命令。写 verification：真实执行命令、日期、版本、测试数量/结果、已检查尺寸与页面、截图路径和任何限制，不写未经运行的通过结论。
- [ ] **Step 8:** 提交 `test: verify dual-design parity and document classroom demo`，完成独立任务审查；只有审查通过才进入最终整分支审查。

## 最终审查与结束条件

以下由控制代理协调，不能用任务 10 的自查代替。

- [ ] 使用 requesting-code-review，对工作分支相对基线的完整 diff 执行独立代码审查；传入规格、计划、测试报告和延后问题记录。若需修复，集中交给一个修复子代理，补充测试并审查修复 diff。
- [ ] 按 verification-before-completion 对最终代码状态核实 lint、完整测试、typecheck、build 与浏览器证据。若审查后修改了代码，重新运行受影响检查；不得引用修改前的全通过状态证明修改后通过。
- [ ] 逐项核对十类页面、两种导航、设计切换、内容等价、功能等价、禁止功能不存在，以及所有必要检查已完成。
- [ ] 全部满足后使用 finishing-a-development-branch。保留可运行的本地成果，不擅自推送、发布、删除工作树或合并；按技能与已有授权处理具体分支操作。
- [ ] 用中文交付：实际完成内容、主要文件、两设计差异、命令与真实结果、限制、当前可运行目录和准确启动命令。若应用仍在 worktree，启动说明必须指向它；不得指向只有文档的 main 目录。

## 计划自查记录

- 规格覆盖：数据/素材/真实性 → 任务 1；路由/存储/响应式导航 → 任务 2；十类页面 → 任务 3—9；无结果与容错 → 各页面任务；可访问性/设计一致性/运行验证/README → 任务 9—10。
- 类型一致性：页面均使用本计划 types；游戏关联统一 gameId，路由统一 slug，金额统一 cents，设计统一字符串 1/2；没有混用名称的接口。
- 依赖顺序：任务 4 不等待任务 5 的卡片组件；任务 9 仅组合已完成组件；App 路由注册和 pages.css 串行增量修改。
- 五个 Review Focus 已分配具体测试；截图与浏览器执行为独立验收，不以 jsdom 测试替代。
- 2026-10-10 补充读取 `NexusPlay_ZhaoZ_Proposal.pptx` 全部 16 页文字，未发现核心范围冲突；其嵌入图片由原始 Clean Images 在相应任务前目视检查。
- 本计划尚未执行。所有未勾选步骤都是待完成工作，不构成通过证据。