const userRole = {
    System: "system",
    Admin: "admin",
    User: "user",
    Client: "client",
    Function: "function",
    Assistant: "assistant"
};
export const UserRole = Object.freeze(userRole);

const senderAction = {
    TypingOn: 1,
    TypingOff: 2,
    MarkSeen: 3
}
export const SenderAction = Object.freeze(senderAction);

const richType = {
    Text: 'text',
    QuickReply: 'quick_reply',
    Button: 'button_template',
    MultiSelect: 'multi-select_template',
    Generic: 'generic_template',
    Upload: 'upload_template'
}
export const RichType = Object.freeze(richType);

const elementType = {
    Text: "text",
    Video: "video",
    File: "file",
    Web: "web_url"
};
export const ElementType = Object.freeze(elementType);

const contentLogSource = {
    UserInput: "user input",
    Prompt: "prompt",
    FunctionCall: "function call",
    AgentResponse: "agent response",
    HardRule: "hard rule"
};
export const ContentLogSource = Object.freeze(contentLogSource);

const editorType = {
    None: "none",
    Text: "text",
    Address: "address",
    Phone: "phone",
    DateTimePicker: "datetime-picker",
    DateTimeRangePicker: 'datetime-range-picker',
    Email: 'email',
    File: 'file'
};
export const EditorType = Object.freeze(editorType);

const fileSourceType = {
    User: 'user',
    Bot: 'bot'
};
export const FileSourceType = Object.freeze(fileSourceType);

const agentType = {
    Routing: 'routing',
    Task: 'task',
    Static: 'static',
    Evaluating: 'evaluating'
};
export const AgentType = Object.freeze(agentType);

const knowledgeCollectionType = {
    QuestionAnswer: 'question-answer',
    Document: 'document'
};
export const KnowledgeCollectionType = Object.freeze(knowledgeCollectionType);

const knowledgePayloadName = {
    Text: 'text',
    Question: 'question',
    Answer: 'answer',
    DataSource: 'dataSource',
    FileId: 'fileId',
    FileName: 'fileName',
    FileSource: 'fileSource',
    FileUrl: 'fileUrl'
};
export const KnowledgePayloadName = Object.freeze(knowledgePayloadName);

const vectorDataSource = {
    Api: 'api',
    User: 'user',
    File: 'file'
};
export const VectorDataSource = Object.freeze(vectorDataSource);

const knowledgeDocSource = {
    Api: 'api',
    User: 'user',
    Web: 'web'
};
export const KnowledgeDocSource = Object.freeze(knowledgeDocSource);

const chatAction = {
    Open: 'open',
    Close: 'close',
    Logout: 'logout',
    Chat: 'chat',
    NewChat: 'new-chat',
    ReceiveMsg: 'receive-msg'
};
export const ChatAction = Object.freeze(chatAction);