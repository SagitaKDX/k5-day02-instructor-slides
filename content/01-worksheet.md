# Worksheet — hướng dẫn chi tiết từng checkpoint

File này là hướng dẫn chính trong 4 tiếng làm bài. Template để điền nằm sẵn trong `report/individual/MSSV_HoTen.md` và `report/team/group_report.md`. File này giải thích **cách** điền cho tốt, kèm gợi ý và prompt mẫu.

Tên framework ghi trong ngoặc ở mỗi phần là nguồn quốc tế của kỹ thuật đó. Xem thêm [03-international-frameworks.md](03-international-frameworks.md).

---

## CP0 — Đọc bài mẫu (15')

Mở [02-deliverable-example.md](02-deliverable-example.md). Khi đọc, chú ý:

- Cá nhân scan rộng thế nào, viết Job Story ra sao.
- Top 3 Problem Card cụ thể đến mức nào.
- Nhóm đi từ 12 candidate về 1 bằng cây OST và bảng chấm điểm.
- Research giải pháp có sẵn làm nhóm **đổi kết luận** từ "tự xây" sang "dùng tool có sẵn + quy trình bán thủ công".
- Problem Statement v0 khác v1 ở đâu.

---

## CP1 — Scan 5+ problems (25') · *Discover*

### Mở rộng trước, lọc sau

Đây là nửa **mở rộng** của diamond thứ nhất (Double Diamond). Đừng lọc vội. Ghi mọi thứ có dấu hiệu thật, bước sau mới chọn.

### 4 lăng kính

| Lăng kính | Câu hỏi gợi mở | Ví dụ |
|---|---|---|
| **Lặp lại** | Việc gì xuất hiện đều mỗi ngày/tuần/tháng? Người mới vào có phải hỏi lại cùng một quy trình không? | Báo cáo tuần, nhập liệu, trả lời câu hỏi lặp lại |
| **Tốn thời gian** | Việc gì mỗi lần làm đều nặng? Thời gian mất ở đâu: tìm thông tin, đọc, tổng hợp, chờ người khác, format, sửa lại? | Đọc tài liệu dài, tìm quyết định cũ, review văn bản |
| **Cần đọc, tổng hợp nhiều thông tin** | Việc gì cần hiểu ngữ cảnh, đọc/viết nhiều văn bản, phân loại, so sánh, tổng hợp từ nhiều nguồn? Mô tả cái khó, chưa nói cách giải (không viết "cần AI…") | Tìm tài liệu, tóm tắt nhiều nguồn, phân loại ticket |
| **Pain từ người khác** | Ai ngoài bạn đang kẹt hoặc than phiền lặp lại? Có dấu hiệu thật không: ticket, tin nhắn, comment, survey? | Hỏi lại deadline, không hiểu task, ticket lặp lại |

Nếu bí, tự hỏi:

- Tuần trước tôi mất nhiều thời gian nhất vào việc gì?
- Việc gì tôi hay trì hoãn vì nhàm chán hoặc rối?
- Người khác hay hỏi tôi câu gì lặp lại?
- Có quy trình nào ở trường hoặc công ty mà ai cũng biết là chậm?

### Viết problem theo Job Story *(Jobs-to-be-Done, Intercom)*

```text
Khi [tình huống cụ thể], tôi muốn [động cơ], để [kết quả mong muốn].
```

| ❌ Chưa tốt | ✅ Tốt hơn |
|---|---|
| Cần chatbot hỏi đáp tài liệu môn học | Khi chuẩn bị nộp bài lab lúc 22h, tôi muốn biết bài mình còn thiếu mục nào, để không bị trừ điểm vì sai cấu trúc |
| Báo cáo tuần mất thời gian | Khi tới sáng thứ Hai, tôi muốn có số liệu sprint và tình hình team trong một chỗ, để viết báo cáo tuần cho CEO trước 10h |

Job Story ép bạn ghi **tình huống** (khi nào xảy ra) và **kết quả** (vì sao quan trọng). Nó cũng ngăn bạn viết giải pháp vào phần problem.

### Dấu hiệu thật

Mỗi dòng cần ít nhất một con số: mất bao lâu, mấy lần/tuần, bao nhiêu người gặp, có bằng chứng gì (log, ticket, tin nhắn, review).

### Ngân hàng gợi ý (chỉ đọc khi bí, viết lại theo trải nghiệm của bạn)

| Bối cảnh | Gợi ý |
|---|---|
| Học tập | Tìm lại câu trả lời cũ trong Discord; đọc tài liệu dài trước deadline; không biết bài nộp thiếu mục nào; ôn tập từ nhiều nguồn rời rạc |
| Đời sống | Theo dõi chi tiêu ở nhiều app; lên kế hoạch đi lại cho nhóm; nhắc việc định kỳ mà hay quên ngữ cảnh |
| Thực tập / việc mới | Hỏi lại quy trình onboarding; tìm đúng người phụ trách; viết update hằng tuần; hiểu task từ nhiều thread |
| Người đi làm | Tổng hợp báo cáo tuần; recap cuộc họp; review tài liệu dài; phân loại ticket; tìm quyết định cũ |
| Sản phẩm đang dùng | Tìm kiếm kém; onboarding khó hiểu; thông báo sai lúc; form dài dễ nhập sai |

### Prompt (chỉ dùng sau khi đã tự scan)

```text
Tôi là [vai trò] trong [bối cảnh]. Công việc hằng tuần gồm: [...]
Tôi đã nghĩ ra các vấn đề sau:
1. [...]
2. [...]
Hãy gợi ý thêm vấn đề theo 4 lăng kính: lặp lại, tốn thời gian, Cần đọc, tổng hợp nhiều thông tin, pain từ người khác.
Viết mỗi gợi ý dạng "Khi..., tôi muốn..., để...", kèm actor và cách đo.
Không đưa giải pháp. Không đưa ý quá rộng kiểu "trợ lý AI toàn năng".
```

---

## CP2 — Top 3 Problem Cards + quy trình nháp (35') · *Discover*

### Chọn top 3

Tiêu chí: actor rõ; quy trình hiện tại vẽ được; bottleneck là một bước cụ thể; impact đo được hoặc ước lượng được; so sánh được No AI / Rule / Workflow / Agent; vừa sức một buổi lab.

### Bản pitch nhanh

Dùng dạng card này khi trình bày với nhóm. Bản nộp chi tiết dùng bảng trong báo cáo cá nhân.

```text
┌──────────────────────────────────────────────┐
│ PROBLEM CARD #___                            │
│ Khi ______, tôi muốn ______, để ______       │
│ Ai chịu ảnh hưởng? ______________________    │
│ Quy trình: 1.____ → 2.____ → 3.____ → 4.____ │
│ Bước nghẽn: ________ (___ phút/lần)          │
│ Đo thành công: từ ___ phút xuống ___ phút    │
│ Cảm nhận nhanh: □ No AI □ Rule □ Workflow    │
│                 □ Agent □ Chưa biết          │
└──────────────────────────────────────────────┘
```

### Quy trình nháp

ASCII, Mermaid hay ảnh đều được, miễn đọc được và có số phút.

```text
HIỆN TẠI — 90 phút/tuần

[Export Jira: 10'] → [Lấy số từ Sheets: 10'] → [Đọc Slack: 15']
→ [Tổng hợp: 15'] → [Viết narrative: 25'] ← BOTTLENECK
→ [Review: 10'] → [Gửi: 5']
```

### Prompt phản biện

```text
Đây là Problem Card của tôi:
[dán card]

Đóng vai một product manager hoài nghi và phản biện:
1. Actor có đủ cụ thể không?
2. Quy trình có thật không, hay là quy trình tôi tưởng tượng?
3. Bottleneck có phải một bước cụ thể không?
4. Metric có đo được không?
5. Sửa quy trình hoặc dùng rule đã đủ chưa?
6. Tôi có đang nhảy sang AI quá sớm không?
Trả lời ngắn, chỉ nói điểm yếu.
```

---

*Nghỉ 10 phút.*

---

## CP3 — Hội tụ nhóm (30') · *Define*

Đây là nửa **thu hẹp**. Nhóm 3–4 người có 9–12 candidate. **Không bỏ phiếu ngay.** Đi qua 4 bước:

```text
Pitch top 3  →  gom cluster  →  cây OST  →  chấm điểm + đồng thuận chọn 1
```

Phase này **tự pitch và tự phản biện, không dùng AI**.

### Bước 1 — Pitch (12')

Mỗi người 1–2 phút/card: problem, actor, bottleneck, vì sao có impact. Người nghe đặt ít nhất 1 câu hỏi. Câu hỏi phản biện tốt:

- "Lần gần nhất chuyện này xảy ra là khi nào? Mất bao lâu?"
- "Nếu không có AI, cách đơn giản nhất để giảm một nửa thời gian là gì?"
- "Ai ngoài bạn gặp vấn đề này? Bạn có bằng chứng không?"
- "Bottleneck thật là bước này, hay là bước trước nó?"

### Bước 2 — Gom cluster (5')

Gom các candidate trùng hoặc cùng pattern. Ví dụ: "tìm quyết định cũ trong Slack" và "tìm câu trả lời cũ trong Discord" là cùng một pattern "tìm lại thông tin trong kênh chat".

### Bước 3 — Opportunity Solution Tree rút gọn (5') *(Teresa Torres)*

```text
OUTCOME (1 cái, đo được): Giảm thời gian PM dành cho báo cáo định kỳ
├── Opportunity: Số liệu nằm rải rác ở 3 công cụ
├── Opportunity: Viết phần nhận định mỗi tuần mất nhiều thời gian nhất
└── Opportunity: Không biết leadership thật sự đọc phần nào
     ✗ "Dashboard tự động"  ← đây là SOLUTION, gạch bỏ khỏi tầng này
```

Quy tắc: tầng opportunity chỉ chứa **nhu cầu hoặc pain**. Thấy tên công cụ, tính năng hay chữ "AI" ở tầng này thì đó là solution đội lốt, gạch bỏ.

### Bước 4 — Chấm điểm và chốt (8')

Chọn shortlist 3 candidate, chấm 1–5 theo 7 tiêu chí trong báo cáo nhóm. Điểm không cần tuyệt đối, mục đích là **ép nhóm nói rõ lý do**. Điểm cao nhất chưa chắc là lựa chọn cuối; nếu nhóm chọn khác, ghi lý do.

---

## CP4 — Kiểm chứng + research (30') · *Define*

### Bước 1 — Assumption Map (5') *(David Bland, Testing Business Ideas)*

Viết 4–6 giả định mà nếu sai thì cả bài sụp. Ví dụ:

- "PM khác cũng mất trên 60 phút/tuần cho báo cáo" (Value)
- "Dữ liệu Jira và Sheets lấy ra được tự động" (Feasibility)
- "Leadership chấp nhận báo cáo do AI soạn nháp" (Viability)

Chấm mỗi giả định theo 2 trục: **quan trọng** (1–5) và **đã có bằng chứng** (1–5). Kiểm chứng giả định **quan trọng cao, bằng chứng thấp** trước.

### Bước 2 — Kiểm chứng (15') *(The Mom Test, Rob Fitzpatrick)*

**3 luật:**

1. Hỏi về **cuộc sống của họ**, không hỏi về ý tưởng của bạn.
2. Hỏi về **chuyện cụ thể đã xảy ra**, không hỏi chung chung hay giả định về tương lai.
3. **Nói ít, nghe nhiều.**

| ❌ Đừng hỏi | ✅ Hỏi thế này |
|---|---|
| Bạn có muốn một công cụ AI viết báo cáo không? | Lần gần nhất bạn viết báo cáo tuần là khi nào? Kể lại từng bước bạn đã làm. |
| Bạn sẽ dùng nó chứ? | Hiện bạn đang xử lý bằng cách nào? Đã thử công cụ gì chưa? |
| Ý tưởng này hay không? | Bước nào mất nhiều thời gian nhất? Mất khoảng bao lâu? |
| Bạn có sẵn sàng trả tiền không? | Bạn đã từng bỏ tiền hoặc thời gian để giải quyết chuyện này chưa? |

**Lời khen không phải bằng chứng.** "Ý hay đấy, mình sẽ dùng!" không chứng minh gì. Bằng chứng là: họ đã mất thời gian thật, đã thử cách khác, đã tự làm workaround, hoặc đồng ý một bước tiếp theo cụ thể (cho xem file báo cáo thật, giới thiệu người khác).

**Phỏng vấn ai?** Người thật sự gặp vấn đề. Bạn học ở nhóm khác cũng được nếu họ có trải nghiệm đó; không phỏng vấn thành viên nhóm mình. Nếu cần người ngoài lớp, có thể hẹn và phỏng vấn trước buổi học.

**Interview Snapshot** *(Teresa Torres)*: ghi mỗi buổi phỏng vấn ngay sau khi xong, vào bảng snapshot trong báo cáo nhóm. Một câu nói nguyên văn đáng giá hơn một đoạn tóm tắt.

Nếu làm survey (5–10 người), hỏi: có gặp không, tần suất, bước nào đau nhất, đang xử lý thế nào, mức độ đáng giải 1–5.

**Ghi cả tín hiệu phản bác.** Nếu 2/3 người nói "mình mất có 15 phút thôi", đó là thông tin quý, có thể buộc nhóm thu hẹp actor hoặc đổi problem.

### Bước 3 — Research giải pháp đã có (10')

Tìm 2–3 công cụ, case hoặc pattern. Với mỗi cái, ghi: giải bước nào trong quy trình, còn bỏ trống bước nào, bài học cho nhóm. Mục đích là **không nghĩ trong chân không**: nếu đã có tool làm 80%, quyết định đúng thường là dùng tool đó.

Prompt research:

```text
Nhóm tôi đang phân tích bài toán: [mô tả ngắn, dạng Job Story]
Tìm giúp:
1. 2–3 công cụ, case hoặc pattern đã giải bài tương tự
2. Mỗi cái giải bước nào trong quy trình, còn bỏ trống bước nào
3. Rủi ro hoặc hạn chế đã biết
Ghi link nguồn chính thức cho mọi claim quan trọng. Không chắc thì nói không chắc.
```

**Tự mở từng link.** AI hay đưa link chết hoặc trích sai. Số liệu không kiểm được nguồn thì không dùng.

---

## CP5 — Quy trình trước/sau + Problem Statement v0 (45') · *Define*

### Quy trình hiện tại (15')

Chi tiết hơn bản cá nhân. Mỗi bước có actor, input, output, thời gian/tần suất, handoff (chuyển cho ai).

### Quy trình tương lai (15')

Đánh dấu rõ:

- Bước nào **Rule/script** xử lý (không cần AI).
- Bước nào **AI** hỗ trợ.
- Bước nào **con người** vẫn làm, nhất là bước kiểm tra trước khi đầu ra đến tay người khác.
- **Boundary**: AI không được làm gì (ví dụ: không tự gửi email, không tự sửa số liệu).
- **Phương án quay về**: AI sai hoặc ngừng hoạt động thì làm gì.

```text
TƯƠNG LAI — khoảng 25 phút/tuần

[Auto-pull Jira + Sheets: 2']        ← Rule/script
→ [AI soạn nháp narrative: 1']       ← AI
→ [PM review + sửa: 15']             ← CON NGƯỜI (boundary: AI không tự gửi)
→ [PM gửi: 2']

Phương án quay về: nháp kém → PM tự viết theo template cũ
```

Có thể nhờ AI chuyển mô tả sang Mermaid, nhưng **kiểm từng bước**. AI hay gộp hai bước khác nhau thành một, làm mất bottleneck.

### Problem Statement v0 (15') *(Lean UX — Jeff Gothelf; Google PAIR)*

6 trường: Actor, Quy trình, Bottleneck, Impact, Success Metric, Boundary.

**Problem Statement không chứa giải pháp.** Nó mô tả đủ rõ để nhiều giải pháp khác nhau có thể được thử.

**Success Metric** cần 3 phần:

| Phần | Ví dụ |
|---|---|
| Baseline (hiện tại) | 90 phút/tuần, đo bằng tự bấm giờ 2 tuần gần nhất |
| Target (muốn đạt) | dưới 30 phút/tuần |
| Cách đo | PM tự ghi thời gian mỗi tuần trong 4 tuần pilot |

Prompt phản biện Problem Statement:

```text
Đây là Problem Statement v0 của nhóm tôi:
[dán 6 trường]
Chỉ ra trường nào còn mơ hồ, metric đã đo được chưa, boundary đã rõ chưa,
có chỗ nào đang lẫn giải pháp vào problem không.
Không viết lại thay tôi. Chỉ đặt câu hỏi và chỉ ra lỗ hổng.
```

---

*Nghỉ 10 phút.*

---

## CP6 — Mức can thiệp AI + Problem Statement v1 + quyết định (25') · *Define*

### Ma trận độ mơ hồ × độ phức tạp

| | Độ mơ hồ thấp | Độ mơ hồ cao |
|---|---|---|
| **Độ phức tạp thấp** | Rule hoặc Workflow đơn giản thường đủ | Workflow có AI ở một bước thường đủ |
| **Độ phức tạp cao** | Workflow nhiều bước rõ ràng, chưa chắc cần Agent | Agent có thể phù hợp, nhưng cần boundary, người kiểm tra và phương án quay về rất rõ |

- **Độ mơ hồ cao**: nhiều đầu ra khác nhau vẫn chấp nhận được (viết narrative). Thấp: có đúng/sai rõ (phân loại 5 nhóm cố định).
- **Độ phức tạp cao**: 3+ bước nối tiếp, 3+ nguồn dữ liệu, bước sau phụ thuộc bước trước.

### No AI / Rule / Workflow / Agent *(Anthropic, Building Effective Agents)*

| Mức | Là gì |
|---|---|
| **No AI** | Sửa quy trình, template, checklist, phân công lại |
| **Rule** | Logic cố định: if/else, công thức, script, automation không có AI |
| **Workflow** | Các bước **định sẵn bằng code**; AI làm một hoặc vài bước trong đó |
| **Agent** | AI **tự quyết bước tiếp theo**, tự chọn công cụ, tự lặp đến khi xong |

Nguyên tắc: **bắt đầu từ mức đơn giản nhất**, chỉ lên mức trên khi có bằng chứng mức dưới không đủ. Mỗi mức lên thêm là thêm chi phí, độ trễ và cách hỏng mới.

Hỏi kỹ:

- Rule có giải được 70–80% trường hợp không?
- Các bước có đủ rõ để viết sẵn thành Workflow không?
- Có thật sự cần AI tự quyết bước tiếp theo không?
- Nếu AI sai, ai phát hiện, ai sửa?

### AI Canvas rút gọn *(Agrawal, Gans, Goldfarb — Prediction Machines)*

Tách bước AI thành: **Prediction** (AI đoán/tạo gì) → **Judgment** (người cân nhắc gì) → **Action** (ai làm gì) → **Outcome** (đo bằng gì), cộng **Input** (cần dữ liệu gì mỗi lần) và **Feedback** (học từ đâu). Nếu không điền được ô Input, bài toán chưa sẵn sàng cho AI.

### Hai câu hỏi của Google PAIR

1. **Augment hay automate?** Người dùng muốn AI giúp mình làm tốt hơn, hay muốn giao hẳn việc? Câu trả lời đến từ kiểm chứng ở CP4, không phải đoán.
2. **AI sai kiểu nào tệ hơn?** Báo nhầm (nói có vấn đề khi không có) hay bỏ sót (không thấy vấn đề có thật)? Thiết kế nghiêng về tránh kiểu sai tệ hơn.

### Tiêu chí đánh giá (eval)

Với AI, "chạy được" chưa đủ. Viết 3–5 tiêu chí xác định đầu ra nào **đạt**, đầu ra nào **không đạt**. Ví dụ cho bài báo cáo tuần:

| Tiêu chí | Đạt | Không đạt |
|---|---|---|
| Đúng số liệu | Mọi con số khớp Jira/Sheets | Có con số AI tự suy ra hoặc làm tròn sai |
| Có rủi ro | Nêu ít nhất 1 rủi ro hoặc blocker nếu có trong dữ liệu | Bỏ qua blocker có trong Slack |
| Không bịa | Mọi nhận định có nguồn trong input | Có nhận định không có trong input |

Nếu không viết được tiêu chí đánh giá, nhóm chưa hiểu đủ "tốt" nghĩa là gì, và đó là dấu hiệu nên chọn **Not Yet**.

### Nếu nhóm chọn No AI hoặc Rule

Đây là kết luận hợp lệ, không bị trừ điểm. Khi đó:

- **AI Canvas** và **2 câu hỏi PAIR**: không cần điền. Thay bằng 2–3 câu giải thích vì sao bài toán không cần AI dự đoán hay tạo nội dung (ví dụ: có đúng/sai rõ, Rule xử lý được phần lớn trường hợp, hoặc kiểm chứng cho thấy người dùng không muốn giao việc).
- **Tiêu chí đánh giá**: viết 3–5 tiêu chí cho **giải pháp không dùng AI** (template, checklist, script): thế nào là đạt, thế nào là không đạt.
- **Problem Statement v1**: trường "AI intervention point" ghi "Không có", kèm lý do; "Mức chọn" ghi No AI hoặc Rule; "Rủi ro & người kiểm tra" ghi rủi ro của giải pháp được chọn.
- **4 rủi ro và quyết định**: vẫn làm đầy đủ, chấm cho giải pháp được chọn.

### Problem Statement v1

Thêm 3 trường so với v0: AI intervention point, mức chọn, rủi ro và người kiểm tra. Ghi rõ trường nào đổi so với v0 và vì sao.

### Quyết định theo 4 rủi ro *(Marty Cagan, SVPG)*

| Rủi ro | Câu hỏi |
|---|---|
| **Value** | Người dùng có thật sự cần và sẽ dùng không? |
| **Usability** | Họ có dùng được không, có hiểu và sửa được đầu ra của AI không? |
| **Feasibility** | Có đủ dữ liệu, công cụ, kỹ năng không? |
| **Viability** | Có hợp chi phí, pháp lý, quy định tổ chức không? Ai vận hành lâu dài? |

- **Go**: không rủi ro nào ở mức Cao, có pilot nhỏ nhất rõ ràng.
- **Not Yet**: có rủi ro Cao nhưng kiểm chứng được nhanh. Ghi rõ cần kiểm chứng gì.
- **No-Go**: rủi ro Cao không giảm được, hoặc No AI / Rule đã đủ. Ghi nên làm gì thay thế.

Luôn ghi **ngưỡng dừng**: "Nếu sau 2 tuần PM vẫn phải viết lại quá 70% bản nháp thì quay về template + dashboard."

---

## CP7 — Reflection (15')

Điền mục 4–6 của báo cáo cá nhân và phần của bạn trong `TEAM.md`. Reflection không chỉ là "tôi dùng AI thế nào", mà còn là **vai trò của tôi trong nhóm**: tôi đã đóng góp gì, đã đổi ý ở đâu, đã phản biện ai.

Không dùng AI để viết thay. Nếu muốn, chỉ dùng AI để gợi ý câu hỏi tự soi.
