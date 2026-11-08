# Rules

## 1. Nguyên tắc làm bài

1. **Problem first, not AI first.** Bắt đầu từ actor, quy trình, bottleneck, metric. Không bắt đầu bằng "làm một chatbot".
2. **Cá nhân scan rộng, nhóm hội tụ.** Mỗi người chuẩn bị nhiều candidate; nhóm chọn một candidate để đào sâu.
3. **Vẽ quy trình trước khi chọn AI.** Chưa chỉ ra được bước nào nghẽn thì chưa chọn Rule / Workflow / Agent.
4. **Bằng chứng là hành vi đã xảy ra, không phải ý kiến.** "Tuần trước mình mất 90 phút" là bằng chứng. "Chắc mình sẽ dùng" thì không.
5. **Không cần AI vẫn là kết luận tốt.** Điểm nằm ở chất lượng lập luận, không nằm ở độ "ngầu" của giải pháp.
6. **Chọn mức đơn giản nhất đủ dùng.** Chỉ lên Workflow khi Rule không đủ, chỉ lên Agent khi Workflow không đủ.

## 2. AI và công cụ

Được dùng các trợ lý AI (ví dụ ChatGPT, Gemini, Perplexity), Google, Mermaid, Excalidraw, FigJam. Quy định theo từng phần:

| Phần | Được dùng AI? | Cách dùng đúng |
|---|---|---|
| CP1 Scan | Có, **sau khi** tự scan trước | Hỏi thêm góc nhìn, rồi tự chọn ý nào là pain thật |
| CP2 Problem Card | Có | Dùng AI để phản biện. Không để AI bịa problem thay mình |
| CP3 Pitch + challenge | **Không** | Tự trình bày và tự đặt câu hỏi phản biện |
| CP4 Phỏng vấn | **Không** | Người thật hỏi người thật. Không dùng AI đóng vai người dùng thay cho phỏng vấn. Được phỏng vấn bạn học ở nhóm khác nếu họ thật sự gặp vấn đề đó, không phỏng vấn thành viên nhóm mình. Mọi dữ liệu phải đến từ người thật và ghi rõ nguồn: ai (theo vai trò, không ghi họ tên), khi nào, hỏi bằng cách nào (phỏng vấn, survey, poll) |
| CP4 Research | Có | Mọi claim quan trọng phải có link đã tự mở và kiểm. Số liệu không kiểm được nguồn thì không dùng |
| CP5 Quy trình | Có | Có thể nhờ AI chuyển mô tả sang Mermaid, nhưng phải tự kiểm từng bước |
| CP5–CP6 Problem Statement, quyết định | Có, chỉ để phản biện | Prompt kiểu "chỉ ra lỗ hổng, đừng viết lại thay tôi". Nhóm tự chốt |
| CP7 Reflection | **Không** dùng để viết thay | Có thể nhờ AI gợi ý câu hỏi tự soi. Câu trả lời phải là trải nghiệm thật của bạn |

**Phần bạn phải tự giải thích được** (sẽ được hỏi khi chấm): chuỗi problem → quy trình → metric → boundary → mức can thiệp AI → quyết định, áp dụng cho bài của nhóm bạn.

Mỗi lần dùng AI, ghi vào bảng "Dùng AI" trong báo cáo cá nhân: dùng để làm gì, AI giúp ở đâu, AI sai ở đâu, bạn đã sửa gì.

## 3. Làm nhóm

- Nhóm 3–4 người, do coach chia hoặc tự lập tại lớp.
- Cả nhóm làm trên **một repo** do nhóm trưởng fork. Phần nhóm (`report/team/group_report.md` và `TEAM.md`) là **một bản chung** viết thẳng trên repo đó. Không copy sang repo cá nhân.
- Mỗi người khai rõ phần mình làm trong `TEAM.md`, và commit báo cáo cá nhân bằng tài khoản GitHub của mình. Thành viên không có đóng góp thực tế sẽ không được tính điểm phần nhóm.
- Mỗi thành viên nộp link repo nhóm lên LMS bằng tài khoản LMS của mình.
- Nếu nhóm bất đồng mà không chốt được, ghi rõ trong mục "Xử lý bất đồng" của báo cáo nhóm.

## 4. Liêm chính

- Không sao chép bài, không nhận bài làm thay.
- Ghi nguồn cho mọi tài liệu, số liệu, hình ảnh lấy từ bên ngoài.
- Không bịa kết quả phỏng vấn hay survey. Ghi rõ số người đã hỏi và cách hỏi.
- Hai báo cáo cá nhân giống nhau đáng kể sẽ bị 0 điểm phần cá nhân.

## 5. Dữ liệu và bảo mật

- Không commit API key, password hay file `.env`.
- Không đưa thông tin cá nhân của người được phỏng vấn (họ tên đầy đủ, số điện thoại, email) vào repo. Ghi theo vai trò, ví dụ "PM, công ty SaaS 50 người".
- Ảnh chụp màn hình Slack, Discord, ticket phải che tên người và thông tin nội bộ.

## 6. Nộp muộn và sửa bài

*Key coach là coach phụ trách chính của lớp, người công bố deadline, gia hạn và kết quả chấm trên LMS.*

- Deadline mặc định: lab sáng nộp trước **23h59 GMT+7** ngày lab; lab chiều/tối nộp trước **11h59 GMT+7** ngày hôm sau.
- Key coach có thể gia hạn tối đa 48 giờ nếu có lý do chính đáng và được thông báo trên LMS.
- Người chấm xem trạng thái repo tại commit cuối cùng trước deadline (hoặc trước hạn gia hạn, nếu được gia hạn). Commit sau mốc đó không được chấm. Lab này không áp dụng hình thức "nộp muộn bị trừ điểm".

## 7. Lỗi kỹ thuật

Nếu không push hay không nộp được do lỗi kỹ thuật, báo key coach trước deadline, kèm ảnh chụp màn hình lỗi và thời điểm xảy ra.
